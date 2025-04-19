
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import gadgetsData from "../data/gadgets.json";
import WishlistButton from "../components/WishlistButton";
import CartButton from "../components/CartButton";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = gadgetsData.find((item) => item.product_id === id);

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
    <div className="product-details">
      <div className="product-image">
        <img src={product.product_image} alt={product.product_title} />
      </div>

      <div className="product-info">
        <h2>{product.product_title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">
          {product.description || "No detailed description available."}
        </p>
        <p className="product-category">Category: {product.category}</p>

        <div className="product-buttons">
          <WishlistButton isWishlisted={isWishlisted} onToggle={handleWishlist} />
          <CartButton isInCart={isInCart} onAdd={handleAddToCart} />
        </div>

        <button className="back-btn" onClick={() => navigate(-1)}>
          ⬅ Go Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
