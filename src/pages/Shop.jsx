import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="shop-container">
      {products.map(product => (
        <div key={product.id} className="card">
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <Link to={`/product/${product.id}`}>
            <button>View</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Shop;
