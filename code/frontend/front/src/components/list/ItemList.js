import "./ItemList.css";
import ListSearch from "./ListSearch";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ItemList = ({
  items,
  page,
  prevPage,
  nextPage,
  setCurrBook,
  setPage,
  handleSearch,
}) => {
  useEffect(() => {
    handleSearch("");
  }, []);

  const navigate = useNavigate();
  const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };
  return (
    <div className="ItemList">
      <ListSearch handleSearch={handleSearch} />
      <ul>
        {items.map((item) => (
          <li
            className="book-item"
            key={uid()}
            data-tooltip={
              `מחבר: ${Object.values(item)[1]}` +
              "\n" +
              `עמודים: ${Object.values(item)[2]} `
            }
            onClick={() => {
              setCurrBook(item);
              navigate("/book");
            }}
          >
            <a>{Object.values(item)[0]}</a>
          </li>
        ))}
      </ul>
      {page !== undefined && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            disabled={!prevPage}
            onClick={() => setPage(page - 1)}
            style={{ padding: 15, margin: 5 }}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            disabled={!nextPage}
            onClick={() => setPage(page + 1)}
            style={{ padding: 15, margin: 5 }}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default ItemList;
