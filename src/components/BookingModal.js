import React from "react";

function BookingModal({ open, onClose}) {
  if (!open) return null;

  return (
      <div className="overlay">
        <div className="modalContainer">
          <div className="modalRight">
            <p onClick={onClose} className="closeBtn">X</p>
            <p>Thank you. Booking Confirmed</p>
          </div>
        </div>
      </div>
  );
}

export default BookingModal
