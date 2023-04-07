import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart({ cartItems, handleCartDisplay }) {
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let amount = 0;
    cartItems.forEach((item) => {
      amount += item.itemPrice * item.quantity;
    });
    setTotalAmount(amount);
  }, [cartItems]);

  const handleCheckout = () => {
    navigate('/order');
  };

  return (
    <div className="cart-container">
      
      <h2>Your Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.itemName} className="cart-item">
            <span className="cart-item-name ">{item.itemName}</span>
            <span className="cart-item-price ">₹{item.itemPrice}</span>
            <span className="cart-item-quantity ">x{item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <span>Total:</span>
        <span>₹{totalAmount}</span>
      </div>
      {cartItems.length > 0 && (
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
}

export default Cart;
