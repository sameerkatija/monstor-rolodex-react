import React from "react";

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
        <div>
          <input
            type="text"
            value={search}
            onChange={onSearchChange}
            placeholder="Search Monstor"
          />
        </div>
        {!(search.length > 0)
          ? monsters?.map((monster) => (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            ))
          : monsters
              .filter((monster) => {
                return monster.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((monster) => (
                <div key={monster.id}>
                  <h1>{monster.name}</h1>
                </div>
              ))}
      </div>
    );
  }
}

export default App;
