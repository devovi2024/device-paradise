
const WishlistButton = ({ isWishlisted, onToggle }) => {
    return (
      <button className="wishlist-btn" onClick={onToggle}>
        {isWishlisted ? "❤️ Wishlisted" : "🤍 Add to Wishlist"}
      </button>
    );
  };
  
  export default WishlistButton;
  
  

  import React from "react";
// import { toast } from "react-toastify";

// const WishlistButton = ({ isInWishlist, onAdd }) => {
//   const handleAddToWishlist = () => {
//     if (!isInWishlist) {
//       toast.info("💖 Item added to wishlist!");
//       onAdd();
//     }
//   };

//   return (
//     <button className="wishlist-btn" onClick={handleAddToWishlist} disabled={isInWishlist}>
//       {isInWishlist ? "💖 In Wishlist" : "🤍 Add to Wishlist"}
//     </button>
//   );
// };

// export default WishlistButton;
