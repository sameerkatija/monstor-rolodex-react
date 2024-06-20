import React, { ChangeEventHandler, memo } from "react";
import "./searchBox.css";

interface SearchBoxProps {
  search: string;
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
}
// React.FC<SearchBoxProps>

const SearchBox: React.FC<SearchBoxProps> = ({
  search,
  onSearchChange,
}: SearchBoxProps) => {
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
