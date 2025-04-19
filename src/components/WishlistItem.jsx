import React from "react";

const WishlistItem = ({ product }) => {
  return (
    <div className="wishlist-item">
      <img src={product.product_image} alt={product.product_title} className="wishlist-item-img" />
      <div className="wishlist-item-info">
        <h3>{product.product_title}</h3>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default WishlistItem;
