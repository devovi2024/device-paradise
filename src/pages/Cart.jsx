import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CartItem from "../components/CartItem";
import PaymentModal from "../components/PaymentModal";
import gadgetsData from "../data/gadgets.json";
import "../styles/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const items = gadgetsData.filter((item) => savedCart.includes(item.product_id));
    setCartItems(items);
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleDeleteItem = (productId) => {
    const updatedCart = cartItems.filter((item) => item.product_id !== productId);
    setCartItems(updatedCart);

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = savedCart.filter((id) => id !== productId);
    localStorage.setItem("cart", JSON.stringify(newCart));

    toast.info("Item removed from cart!");
  };

  const handleSort = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    const sortedItems = [...cartItems].sort((a, b) => {
      return order === "asc" ? a.price - b.price : b.price - a.price;
    });
    setCartItems(sortedItems);
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">My Cart🛒</h2>

      {/* Sort Dropdown */}
      <div className="sort-dropdown">
        <label htmlFor="sort" className="sort-label">Sort by Price:</label>
        <select id="sort" value={sortOrder} onChange={handleSort} className="sort-select">
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-message">🛍️ No items in cart.</p>
      ) : (
        <>
          <div className="cart-container">
            {cartItems.map((item) => (
              <CartItem key={item.product_id} product={item}>
                <button className="delete-btn" onClick={() => handleDeleteItem(item.product_id)}>❌</button>
              </CartItem>
            ))}
          </div>

          <div className="cart-summary">
            <p>Total Price: ${calculateTotalPrice()}</p>
            <button onClick={() => setShowModal(true)} className="checkout-btn">Checkout</button>
          </div>
        </>
      )}

      {showModal && (
        <PaymentModal
          total={calculateTotalPrice()}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Cart;
