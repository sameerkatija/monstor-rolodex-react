import React from "react";
import CardList from "./components/cardList";
import SearchBox from "./components/searchBox";
import "./App.css";
import { connect } from "react-redux";
import { getAllMonsters } from "./reducer/monstors/monstor-action";

class App extends React.Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.props.getAllMonsters(data);
      });
  }

  render() {
    console.log("Render from App");
    return (
      <div>
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox />
        <CardList />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getAllMonsters,
};

export default connect(null, mapDispatchToProps)(App);
