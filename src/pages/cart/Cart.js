import React, { useContext } from "react";
import "./Cart.css";
import { PRODUCTS } from "../../products.js";
import { ShopContext } from "../../context/Shop-context";
import CartItem from "./Cart-item";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1 style={{ marginTop: "30px" }}> Your cart items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}

        {totalAmount > 0 ? (
          <div className="checkout">
            <h3> Subtotal: ${totalAmount} </h3>
            <button
              onClick={() => navigate("/")}
              style={{ marginBottom: "20px" }}
            >
              {" "}
              Continue Shopping{" "}
            </button>
            <button
              onClick={() => {
                checkout();
                navigate("/");
              }}
            >
              {" "}
              Checkout{" "}
            </button>
          </div>
        ) : (
          <h1> Your Shopping Cart is Empty</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
