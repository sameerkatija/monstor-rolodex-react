import { memo } from "react";
import "./searchBox.css";

const SearchBox = ({ search, onSearchChange }) => {
  console.log("Render from SearchList");
  return (
    <input
      type="text"
      value={search}
      onChange={onSearchChange}
      className="search-box monsters-search-box"
      placeholder="Search Monstor"
    />
  );
};

export default memo(SearchBox);
