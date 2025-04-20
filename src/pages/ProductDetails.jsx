import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import gadgetsData from "../data/gadgets.json";
import WishlistButton from "../components/WishlistButton";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = gadgetsData.find((item) => item.product_id.toString() === id);

  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setIsWishlisted(wishlist.includes(id));
    setIsInCart(cart.includes(id));
  }, [id]);

  const handleWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (wishlist.includes(id)) {
      wishlist = wishlist.filter((pid) => pid !== id);
    } else {
      wishlist.push(id);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.includes(id)) {
      cart.push(id);
      localStorage.setItem("cart", JSON.stringify(cart));
      setIsInCart(true);
    }
  };

  if (!product) {
    return (
      <div className="product-details">
        <h2>Product Not Found</h2>
        <button onClick={() => navigate("/")}>Go Back Home</button>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <div className="product-header">
        <h1>Product Details</h1>
        <p>
          Explore the latest gadgets that will take your experience to the next level.
          From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img src={product.product_image} alt={product.product_title} />
        </div>

        <div className="product-info">
          <h2>{product.product_title}</h2>
          <p className="product-price">Price: ${product.price}</p>
          <p className="in-stock">In Stock</p>

          <p className="product-description">
            {product.description ||
              "Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display."}
          </p>

          <div className="product-specs">
            <h4>Specification:</h4>
            <ol>
              <li>Intel i7 11th Gen</li>
              <li>16GB RAM</li>
              <li>512GB SSD</li>
              <li>Touchscreen</li>
            </ol>
          </div>

          <div className="product-rating">
            <h4>Rating ⭐</h4>
            <div className="stars">
              ⭐ ⭐ ⭐ ⭐ ☆ <span className="rating-value">4.8</span>
            </div>
          </div>

          <div className="product-buttons">
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add To Cart 🛒
            </button>
            <WishlistButton isWishlisted={isWishlisted} onToggle={handleWishlist} />
          </div>

          <button className="back-btn" onClick={() => navigate(-1)}>
            ⬅ Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
