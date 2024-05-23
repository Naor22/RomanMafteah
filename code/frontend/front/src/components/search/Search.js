import { useState } from "react";
import SearchItem from "./SearchItem";
import List from "@mui/material/List";
import Filters from "../../utils/Filters";
import Charts from "../charts/Charts";
import Button from "@mui/material/Button";
import ItemList from "../list/ItemList";

const Search = ({ handleFilter, setCurrBook }) => {
  const [tickedArray, setTickedArray] = useState([]);
  const [stats, setStats] = useState({});
  const [maleData, setMaleData] = useState({});
  const [titles, setTitles] = useState([]);
  const [originalTitles, setOriginalTitles] = useState([]);
  const [status, setStatus] = useState(0);

  const setDefault = (data) => {
    setOriginalTitles(data);
    setTitles(data);
  };

  const handleTick = (newItem) => {
    let added = false;

    const tmpTicked = tickedArray.map((object) => {
      if (object.name === newItem.name) {
        added = true;
        return newItem;
      } else {
        return object;
      }
    });
    if (!added) {
      tmpTicked.push(newItem);
    }
    setTickedArray(tmpTicked);
  };
  const clearFilter = () => {
    setStatus(status + 1);
    setStats({});
    setTickedArray([]);
  };

  const handleStats = (stats) => {
    const arr = Object.keys(stats)[1].split("|");
    const statsObject = {
      total: Object.values(stats)[0],
      precentage: Object.values(stats)[1],
      filters: arr,
    };
    setOriginalTitles(Object.values(stats)[2]);
    setTitles(Object.values(stats)[2]);
    setStats(statsObject);
  };

  const handleSearch = (query) => {
    if (query == "") {
      setTitles(originalTitles);
      return;
    }

    const filter = originalTitles.filter((item) =>
      String(item.title).includes(query.target.value)
    );
    setTitles(filter);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <div className="center" style={{ width: "100%" }}>
        <Charts
          stats={stats}
          status={status}
          maleData={maleData}
          setDefault={setDefault}
        />
        <div
          className="hiddenscroll"
          style={{
            margin: 10,
            height: "34vh",
            width: "auto",
            overflowY: "scroll",
          }}
        >
          <ItemList
            items={titles}
            setCurrBook={setCurrBook}
            handleSearch={handleSearch}
          />
        </div>
      </div>
      <List
        className="shadow-5"
        sx={{
          width: "100%",
          maxWidth: 400,
          height: "90vh",

          bgcolor: "background.paper",
          overflowY: "scroll",
        }}
        component="nav"
        dir="rtl"
        aria-labelledby="nested-list-subheader"
      >
        <Button
          variant="outlined"
          style={{ width: "60%", marginBottom: 5, color: "#F0A462" }}
          onClick={() => handleFilter(tickedArray, handleStats)}
        >
          פילטר
        </Button>
        <Button
          variant="outlined"
          style={{ width: "40%", marginBottom: 5, color: "#F0A462" }}
          onClick={() => clearFilter()}
        >
          ניקוי פילטר
        </Button>
        <div style={{ overflowY: "scroll", height: "100%" }}>
          {Filters.map((filter) =>
            Object.keys(filter).map((item) => {
              return Object.values(filter).map((box) => {
                return (
                  <SearchItem
                    handleTick={handleTick}
                    tickedArray={tickedArray}
                    key={item}
                    name={item}
                    box={box}
                  />
                );
              });
            })
          )}
        </div>
      </List>
    </div>
  );
};

export default Search;
