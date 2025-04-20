
import React from "react";

const CartButton = ({ isInCart, onAdd }) => {
  return (
    <button className="cart-btn" onClick={onAdd} disabled={isInCart}>
      {isInCart ? "✅ Added to Cart" : "🛒 Add to Cart"}
    </button>
  );
};

export default CartButton;



// import React from "react";
// import { toast } from "react-toastify";

// const CartButton = ({ isInCart, onAdd }) => {
//   const handleAddToCart = () => {
//     if (!isInCart) {
//       toast.success("🛒 Item added to cart!");
//       onAdd(); 
//     }
//   };

//   return (
//     <button className="cart-btn" onClick={handleAddToCart} disabled={isInCart}>
//       {isInCart ? "✅ Added to Cart" : "🛒 Add to Cart"}
//     </button>
//   );
// };

// export default CartButton;
