import { Component, memo } from "react";
import "./searchBox.css";
import { connect } from "react-redux";
import { searchMonstor } from "../../reducer/monstors/monstor-action";
class SearchBox extends Component {
  onSearchChange = (e) => this.props.searchMonstor(e.target.value);

  render() {
    const { search } = this.props;
    console.log("Render from SearchList");

    return (
      <input
        type="text"
        value={search}
        onChange={this.onSearchChange}
        className="search-box monsters-search-box"
        placeholder="Search Monstor"
      />
    );
  }
}
const mapStateToProps = (state) => ({
  search: state.monRed.search,
});

const mapDispatchToProps = {
  searchMonstor,
};
export default memo(connect(mapStateToProps, mapDispatchToProps)(SearchBox));
