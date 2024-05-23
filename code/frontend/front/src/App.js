import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import axios from "axios";
import ItemList from "./components/list/ItemList";
import Search from "./components/search/Search";
import Home from "./components/home/Home";
import Book from "./components/book/Book";

const App = () => {
  const [originalItems, setOriginalItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [page, setPage] = useState(1);
  const [currBook, setCurrBook] = useState();
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get(`/api/items/?page=${page}`);
      setPrevPage(response.data.previous);
      setNextPage(response.data.next);
      setOriginalItems(response.data.results);
      setFilteredItems(response.data.results);
    };
    fetchItems();
  }, [page]);

  const handleFilter = (ticked, handleStats) => {
    axios
      .post("/api/stats", ticked)
      .then((response) => {
        handleStats(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleSearch = (query) => {
    if (query == "") {
      setFilteredItems(originalItems);
      return;
    }
    const filter = originalItems.filter((item) =>
      item.title.includes(query.target.value)
    );
    setFilteredItems(filter);
  };

  const handleSort = (option) => {
    const sortedItems = [...filteredItems].sort((a, b) =>
      a[option] > b[option] ? 1 : -1
    );
    setFilteredItems(sortedItems);
  };

  return (
    <div className="Primary-container">
      <HashRouter>
        <Navbar />
        <div style={{ padding: 10 }}>
          <Routes>
            <Route path="/" element={<Home />} /> {Home}
            <Route path="/Home" element={<Home />} /> {Home}
            <Route
              path="/browse"
              element={
                <ItemList
                  nextPage={nextPage}
                  prevPage={prevPage}
                  page={page}
                  setPage={setPage}
                  items={filteredItems}
                  handleSearch={handleSearch}
                  handleSort={handleSort}
                  setCurrBook={setCurrBook}
                />
              }
            />{" "}
            <Route
              path="/search"
              element={
                <>
                  {
                    <Search
                      setCurrBook={setCurrBook}
                      handleFilter={handleFilter}
                      handleSearch={handleSearch}
                    />
                  }
                </>
              }
            ></Route>
            <Route path="/book" element={<Book book={currBook} />}></Route>
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
