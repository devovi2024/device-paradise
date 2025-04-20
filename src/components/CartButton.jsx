import React from "react";

const CartButton = ({ isInCart, onAdd }) => {
  return (
    <button className="cart-btn" onClick={onAdd} disabled={isInCart}>
      {isInCart ? "✅ Added to Cart" : "🛒 Add to Cart"}
    </button>
  );
};

export default CartButton;


