import React from "react";

const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <img src={product.product_image} alt={product.product_title} className="cart-item-img" />
      <div className="cart-item-info">
        <h3>{product.product_title}</h3>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default CartItem;
