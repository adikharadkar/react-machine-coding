import "../styles/Card.css";

const Card = ({ src, productName, alt }) => {
  return (
    <div className="card">
      <img className="card-img" src={src} alt={alt} />
      <h4>{productName}</h4>
    </div>
  );
};

export default Card;
