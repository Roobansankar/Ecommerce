import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <h6> Price:${price}</h6>

        <button
          className="addToCartBttn"
          onClick={() => {
            addToCart(id);
          }}
        >
          Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
