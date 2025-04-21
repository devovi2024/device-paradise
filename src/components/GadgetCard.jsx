import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/GadgetCard.css";

const GadgetCard = ({ product, onClick }) => {
  const { product_id, product_image, product_title, price } = product;

  return (
    <div className="gadget-card" onClick={onClick}>
      <img src={product_image} alt={product_title} className="gadget-image" />
      <h3 className="gadget-title">{product_title}</h3>
      <p className="gadget-price">Price: ${price}</p>
      <Link to={`/product/${product_id}`} className="gadget-button">
        View Details
      </Link>
    </div>
  );
};

GadgetCard.propTypes = {
  product: PropTypes.shape({
    product_id: PropTypes.string.isRequired,
    product_image: PropTypes.string.isRequired,
    product_title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

export default GadgetCard;
