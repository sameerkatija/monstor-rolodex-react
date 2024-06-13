import { Component } from "react";
import "./card.css";

class Card extends Component {
  render() {
    const { monstor } = this.props;
    const { id, name, email } = monstor;
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
  }
}

export default Card;
