import React from "react";
import Card from "../Card";
import "./cardList.css";
import { Monster } from "../../App";

interface ICardList {
  monsters: Monster[];
}

const CardList: React.FC<ICardList> = ({ monsters }: ICardList) => {
  console.log("Render from cardList");
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
