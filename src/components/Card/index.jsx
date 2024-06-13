import "./card.css";

const Card = ({ monstor }) => {
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
};

export default Card;
