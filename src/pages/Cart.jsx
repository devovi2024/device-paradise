import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CartItem from "../components/CartItem";
import PaymentModal from "../components/PaymentModal";
import gadgetsData from "../data/gadgets.json";
import "../styles/Cart.css";





const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const items = gadgetsData.filter((item) => savedCart.includes(item.product_id));
    setCartItems(items);
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleAddItemToCart = (productId) => {
    const newItem = gadgetsData.find((item) => item.product_id === productId);
    const totalPrice = parseFloat(calculateTotalPrice());

    if (totalPrice + newItem.price > 1000) {
      toast.error("Cannot add item. Cart total exceeds $1000!");
      return;
    }

    setCartItems((prev) => {
      const updatedCart = [...prev, newItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart.map((item) => item.product_id)));
      return updatedCart;
    });

    toast.success(`${newItem.name} added to the cart!`);
  };

  const handleDeleteItem = (productId) => {
    const updatedCart = cartItems.filter((item) => item.product_id !== productId);
    setCartItems(updatedCart);

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = savedCart.filter((id) => id !== productId);
    localStorage.setItem("cart", JSON.stringify(newCart));

    toast.info("Item removed from cart!");
  };

  const sortByPrice = () => {
    const sorted = [...cartItems].sort((a, b) => a.price - b.price);
    setCartItems(sorted);
  };

  const sortByPurchase = () => {
    const sorted = [...cartItems].sort((a, b) => b.purchase_count - a.purchase_count);
    setCartItems(sorted);
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
          onSortPrice={sortByPrice}
          onSortPurchase={sortByPurchase}
        />
      )}
    </div>
  );
};

export default Cart;
