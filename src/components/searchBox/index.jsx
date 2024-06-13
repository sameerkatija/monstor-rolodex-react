import { Component, memo } from "react";
import "./searchBox.css";
class SearchBox extends Component {
  render() {
    const { search, onSearchChange } = this.props;
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
  }
}
export default memo(SearchBox);
