import React from "react";

const CartItem = ({ product, children }) => {
  return (
    <div className="cart-item">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {children} 
    </div>
  );
};

export default CartItem;
