import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify'; // Importing toast
import CartItem from "../components/CartItem";
import gadgetsData from "../data/gadgets.json";
import "../styles/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load items from localStorage on first load
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const items = gadgetsData.filter((item) =>
      savedCart.includes(item.product_id)
    );
    setCartItems(items);
  }, []);

  // Delete item from cart
  const handleDeleteItem = (productId) => {
    // 1. Remove from state
    const updatedCart = cartItems.filter(
      (item) => item.product_id !== productId
    );
    setCartItems(updatedCart);

    // 2. Remove from localStorage
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = savedCart.filter((id) => id !== productId);
    localStorage.setItem("cart", JSON.stringify(newCart));

    // Show toast when item is deleted
    toast.success('Item removed from Cart!');
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">My Cart🛒</h2>

      {cartItems.length === 0 ? (
        <p className="empty-message">🛍️ No items in cart.</p>
      ) : (
        <>
          <div className="cart-container">
            {cartItems.map((item) => (
              <CartItem key={item.product_id} product={item}>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteItem(item.product_id)}
                >
                  ❌
                </button>
              </CartItem>
            ))}
          </div>

          <div className="cart-summary">
            <p>Total Price: ${calculateTotalPrice()}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
