import { Component } from "react";

class Card extends Component {
  render() {
    const { monstor } = this.props;
    return (
      <div>
        <h1>{monstor.name}</h1>
      </div>
    );
  }
}

export default Card;
