import React from "react";

class CardList extends React.Component {
  render() {
    const { monster } = this.props;
    return (
      <div>
        <h1>{monster.name}</h1>
      </div>
    );
  }
}
export default CardList;
