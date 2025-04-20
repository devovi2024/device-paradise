import React from "react";
const CartItem = ({ product, children }) => {
  return (
    <div className="cart-item">
      <div>
        <img src={product.image || "https://via.placeholder.com/150"} alt={product.name} />
      </div>
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p><strong>Price: ${product.price}</strong></p>
      </div>
      {children}
    </div>
  );
};

export default CartItem;


// import React from "react";
// import "../styles/Cart.css";

// const CartItem = ({ product, children }) => {
//   return (
//     <div className="cart-item">
//       <div className="cart-item-info">
//         <h4>{product.name}</h4>
//         <p>Price: ${product.price}</p>
//         <p>Purchased: {product.purchase_count || 0} times</p>
//       </div>
//       <div className="cart-item-actions">{children}</div>
//     </div>
//   );
// };

// export default CartItem;
