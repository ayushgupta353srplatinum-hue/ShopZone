import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h1 className="logo">ShopZone</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart" className="cart-link">
          Cart <span className="badge">{cart.length}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
