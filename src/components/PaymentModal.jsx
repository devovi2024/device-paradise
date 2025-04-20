import React from "react";
import "../styles/Modal.css";

const PaymentModal = ({ total, onClose, onSortPrice, onSortPurchase }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-icon">
          <div className="checkmark-circle">
            <div className="checkmark">✔</div>
          </div>
        </div>
        <h2 className="modal-title">Payment Successfully</h2>
        <p className="modal-message">Thanks for purchasing.</p>
        <p className="modal-total">Total: {total}</p>


        <button className="modal-close" onClick={onClose}>Okay</button>
      </div>
    </div>
  );
};

export default PaymentModal;