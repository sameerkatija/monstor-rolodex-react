import React from "react";
import Card from "../Card";

class CardList extends React.Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters?.map((monster) => (
          <Card key={monster.id} monstor={monster} />
        ))}
      </div>
    );
  }
}
export default CardList;
