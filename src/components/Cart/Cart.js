import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/order');
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.itemPrice,
    0
  );

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <div key={item.itemName} className="cart-item">
          <span className="cart-item-name">{item.itemName}</span>
          <span className="cart-item-price">₹{item.itemPrice}</span>
        </div>
      ))}
      <div className="cart-summary">
        <span>Total: ₹{totalAmount}</span>
        <button onClick={handleCheckout} className="checkout-button">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
