import CardList from "./components/cardList";
import SearchBox from "./components/searchBox";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setMonsters(data));
  }, []);
  const onSearchChange = (e) => setSearch(e.target.value);
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
};

export default App;
