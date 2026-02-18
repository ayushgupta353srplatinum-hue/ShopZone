import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />
      <h3 style={{ marginTop: "12px" }}>{product.title}</h3>
      <div className="price">${product.price}</div>

      <Link to={`/product/${product.id}`}>
        <button className="btn">View Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;
