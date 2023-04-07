import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderScreen.css';

function OrderScreen({ cartItems }) {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // Code to place the order
    alert('Order placed successfully!');
    navigate('/');
  };

  

  return (
    <div className="order-container">
      <h1>Order Summary</h1>
      {cartItems?.map((item) => (
        <div key={item.itemName} className="order-item">
          <span className="order-item-name">{item.itemName}</span>
          <span className="order-item-price">₹{item.itemPrice * item.quantity}</span>
        </div>
      ))}
      
      <button onClick={handlePlaceOrder} className="place-order-button">
        Place Order
      </button>
    </div>
  );
}

export default OrderScreen;
