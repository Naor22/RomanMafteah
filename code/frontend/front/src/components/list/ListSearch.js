import "./ListSearch.css";
import TextField from "@mui/material/TextField";

const ListSearch = ({ handleSearch }) => {
  return (
    <div style={{ marginBottom: 5 }}>
      <TextField
        placeholder="חיפוש"
        id="outlined-basic"
        className="searchBox-items"
        dir="rtl"
        variant="outlined"
        style={{ width: "100%" }}
        onChange={(event) => handleSearch(event)}
      />
    </div>
  );
};

export default ListSearch;
