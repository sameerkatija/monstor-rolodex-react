import React from "react";
import Card from "../Card";
import "./cardList.css";
import { connect } from "react-redux";

class CardList extends React.Component {
  render() {
    const { monsters, search } = this.props.monsters;
    const filteredMonstors = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(search.toLowerCase());
    });
    console.log("Render from cardList");
    console.log(monsters, search);
    return (
      <div className="card-list">
        {filteredMonstors.map((monster) => (
          <Card key={monster.id} monstor={monster} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  monsters: state.monRed,
  // Map other state properties as needed
});
export default connect(mapStateToProps)(CardList);
