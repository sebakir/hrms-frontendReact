import { Component, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SidebarContent.css";

export default class SidebarContent extends Component {
  render() {
    return (
      <div style={{ width: "480px" }}>
        <div className="cart-item">
          <h3>Your Cart</h3>
          <button
            className="close-cart-btn"
            onClick={() => {
              this.props.onSetSidebarOpen(false);
            }}
          >
            <h3>X</h3>
          </button>
        </div>
        <hr
          style={{
            height: "1px",
            borderWidth: 0,
            color: "#b3afaf",
            backgroundColor: "#b3afaf"
          }}
        />
        <div className="cart-main">
          {this.props.cart.map((c) => (
            <CartItem {...this.props} c={c} key={c.id} />
          ))}
        </div>
        <hr
          style={{
            height: "1px",
            borderWidth: 0,
            color: "#b3afaf",
            backgroundColor: "#b3afaf"
          }}
        />
        <div className="cart-item">
          <h3>Subtotal:</h3>
          <h3>
            {this.props.cart.reduce((a, c) => a + c.count * c.price, 0)} USD
          </h3>
        </div>
        <div className="cart-item" style={{ justifyContent: "center" }}>
          <Link
            className="checkout-link"
            to="/checkout"
            onClick={() => {
              this.props.onSetSidebarOpen(false);
            }}
          >
            Continue to Checkout
          </Link>
        </div>
      </div>
    );
  }
}

const CartItem = (props) => {
  const [qtyInCart, setQtyInCart] = useState(props.c.count);

  return (
    <div>
      <div className="cart-item">
        <img width="20%" src={props.c.image} alt={props.c.name} />
        <div className="cart-item-center">
          <h3>{props.c.title}</h3>
          <h4>{props.c.price} USD</h4>
        </div>
        <input
          className="qty-inp"
          type="text"
          value={qtyInCart}
          onChange={(e) => {
            setQtyInCart(Number(e.target.value));
          }}
          onBlur={() => {
            props.updateInCart(props.c.id, qtyInCart);
          }}
        />
      </div>
      <button
        className="rmv-btn"
        onClick={() => {
          props.removeFromCart(props.c.id);
        }}
      >
        Remove
      </button>
    </div>
  );
};
