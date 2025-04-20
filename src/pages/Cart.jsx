



import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
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

  // Calculate total price
  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
  };

  // Handle adding an item to the cart
  const handleAddItemToCart = (productId) => {
    const newItem = gadgetsData.find((item) => item.product_id === productId);
    const totalPrice = parseFloat(calculateTotalPrice());

    // Check if adding the new item exceeds the $1000 limit
    if (totalPrice + newItem.price > 1000) {
      toast.error("Cannot add item. Cart total exceeds $1000!");
      return;
    }

    // Add item to state and localStorage
    setCartItems((prev) => {
      const updatedCart = [...prev, newItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart.map(item => item.product_id)));
      return updatedCart;
    });

    toast.success(`${newItem.name} added to the cart!`);
  };

  // Handle removing an item from the cart
  const handleDeleteItem = (productId) => {
    const updatedCart = cartItems.filter((item) => item.product_id !== productId);
    setCartItems(updatedCart);

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = savedCart.filter((id) => id !== productId);
    localStorage.setItem("cart", JSON.stringify(newCart));

    toast.info("Item removed from cart!");
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
