import { useCart } from "../Context/CartContetxt";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useCart();

  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0);

  if (cart.length == 0) return;
  <div className="alert alert-info mt-4">
    🛒 Your cart is empty. Explore Products.
  </div>;
return(
    <div className="container mt-4">
      <h3>Your Cart</h3>
      <ul className="list-group mb-3">
        {cart.map((item) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={item.id}
          >
            <span>
              {item.title} x {item.quantity}
            </span>
            <span>${item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <h5>Total: ${total}</h5>
      <Link to="/address" className="btn btn-primary mt-2">
        Proceed to Address
      </Link>
    </div>
)}
export default Cart;