import React from "react";
import CardList from "./components/cardList";
import SearchBox from "./components/searchBox";

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
    console.log("render");
    return (
      <div>
        <SearchBox onSearchChange={onSearchChange} search={search} />
        {!(search.length > 0)
          ? monsters?.map((monster) => (
              <CardList key={monster.id} monster={monster} />
            ))
          : monsters
              .filter((monster) => {
                return monster.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((monster) => (
                <CardList key={monster.id} monster={monster} />
              ))}
      </div>
    );
  }
}

export default App;
