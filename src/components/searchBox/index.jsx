import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { search, onSearchChange } = this.props;
    return (
      <div>
        <input
          type="text"
          value={search}
          onChange={onSearchChange}
          placeholder="Search Monstor"
        />
      </div>
    );
  }
}
export default SearchBox;
