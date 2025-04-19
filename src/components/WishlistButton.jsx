
const WishlistButton = ({ isWishlisted, onToggle }) => {
    return (
      <button className="wishlist-btn" onClick={onToggle}>
        {isWishlisted ? "❤️ Wishlisted" : "🤍 Add to Wishlist"}
      </button>
    );
  };
  
  export default WishlistButton;
  
  