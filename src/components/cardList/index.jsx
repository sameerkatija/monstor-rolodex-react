import React from "react";
import Card from "../Card";
import "./cardList.css";

class CardList extends React.Component {
  render() {
    const { monsters } = this.props;
    console.log("Render from cardList");
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card key={monster.id} monstor={monster} />
        ))}
      </div>
    );
  }
}
export default CardList;
