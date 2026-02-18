import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function Cart() {
  const { cart, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <h4>{item.title}</h4>
          <p>${item.price}</p>
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
}

export default Cart;
