import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
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
  render() {
    const { monsters } = this.state;
    return (
      <div>
        {monsters?.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
