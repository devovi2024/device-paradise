import React from "react";
import { toast } from 'react-toastify';
import "../styles/WishlistItem.css";

const WishlistItem = ({ product, children }) => {

  const handleAddToCart = (productId) => {
    let savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!savedCart.includes(productId)) {
      savedCart.push(productId);
      localStorage.setItem("cart", JSON.stringify(savedCart));
      toast.success('Item added to Cart!');
    } else {
      toast.info('Item already in Cart!');
    }
  };

  return (
    <div className="wishlist-card">
      <div className="wishlist-image">
        <img src={product.product_image} alt="" />
      </div>

      <div className="wishlist-info">
        <h3 className="wishlist-product-name">{product.name}</h3>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>

        <div className="wishlist-actions">
          <button 
            className="wishlist-add-btn" 
            onClick={() => handleAddToCart(product.product_id)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="wishlist-delete">
        {children}
      </div>
    </div>
  );
};

export default WishlistItem;
