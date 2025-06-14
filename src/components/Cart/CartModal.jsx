import React from "react";
import CartForm from "./CartForm";
import "../../assets/styles/CartModal.scss";

export default function CartModal({ isOpen, onClose, cart }) {
  if (!isOpen) return null;

  const handleSubmit = (message) => {
    window.open(`https://wa.me/53984158694?text=${message}`, "_blank");
    onClose?.();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <span onClick={onClose} className="close">
          &times;
        </span>
        <CartForm cart={cart} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
