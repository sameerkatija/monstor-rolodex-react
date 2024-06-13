import React from "react";
import CardList from "./components/cardList";
import SearchBox from "./components/searchBox";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>
        this.setState(() => ({
          monsters: data,
        }))
      );
  }

  onSearchChange = (e) => this.setState(() => ({ search: e.target.value }));

  render() {
    const { monsters, search } = this.state;
    const { onSearchChange } = this;
    const filteredMonstors = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(search.toLowerCase());
    });
    console.log("Render from App");
    return (
      <div>
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox onSearchChange={onSearchChange} search={search} />
        <CardList monsters={filteredMonstors} />
      </div>
    );
  }
}

export default App;
