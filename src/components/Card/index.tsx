import React, { memo } from "react";
import "./card.css";
import { Monster } from "../../App";

type CardProps = {
  monster: Monster;
};

const Card: React.FC<CardProps> = ({ monster }: CardProps) => {
  const { id, name, email } = monster;
  console.log("Render from Card");
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monstor ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default memo(Card);
