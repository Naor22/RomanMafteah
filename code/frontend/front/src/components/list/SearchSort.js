import { React, useState } from "react";
import "./SearchSort.css";

const SearchSort = ({ onSearch, onSort }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchQuery(searchValue);
    onSearch(searchValue || "");
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    onSort(event.target.value);
  };

  return (
    <form>
      <select name="sort" defaultValue={"none"} onChange={handleSortChange}>
        <option value="none">מיין לפי</option>
        <option value="name">שם הספר</option>
        <option value="author">שם הסופר</option>
        <option value="length">מס' עמודים</option>
      </select>
      <input
        type="text"
        name="search"
        value={searchQuery}
        placeholder="חיפוש"
        dir="rtl"
        onChange={handleSearchChange}
      />
    </form>
  );
};

export default SearchSort;
