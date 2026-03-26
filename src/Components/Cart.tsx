import { useCart } from "../Context/CartContetxt";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <div className="container mt-4 alert alert-info mt-4">
        🛒 Your cart is empty. Explore Products.
      </div>
    );
  }
  return (
     <div className="cart-page ">
      <div className="cart-wrapper">
        <div className="cart-top-row cart-summary">
          <h2 className="cart-heading">🛒 Your Cart</h2>
          <span className="cart-count">
            {cart.length} item{cart.length > 1 ? "s" : ""}
          </span>
        </div>

        <div className="cart-grid">
          {cart.map((item) => (
            <div key={item.id} className="cart-card">
              <div className="cart-icon-box">
                <span>📦</span>
              </div>
              <div className="cart-info">
                <div className="cart-title">{item.title}</div>
                <div className="cart-qty">Qty: {item.quantity}</div>
              </div>
              <div className="cart-price-box">
                <span className="cart-price-label">Total</span>
                <span className="cart-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <span className="cart-unit-price">
                  ${item.price.toFixed(2)} each
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="cart-summary-left">
            <span className="cart-total-label">Order Total</span>
            <span className="cart-total-amount">${total.toFixed(2)}</span>
          </div>
          <div className="cart-summary-right">
            <button onClick={clearCart} className="cart-btn-outline">
              Clear Cart
            </button>
            <Link to="/address" className="cart-btn-primary">
              Proceed to Checkout →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
