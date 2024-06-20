import CardList from "./components/cardList";
import SearchBox from "./components/searchBox";
import "./App.css";
import { ChangeEventHandler, useEffect, useState } from "react";
import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filteredMonstors, setFilteredMonstors] = useState<Monster[]>(monsters);
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);
  useEffect(() => {
    const filteredMonstorsArr = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredMonstors(filteredMonstorsArr);
  }, [monsters, search]);
  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearch(e.target.value);

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
