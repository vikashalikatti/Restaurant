import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMenu } from '../../api/getMenu';
import Cart from '../Cart/Cart';
import './MenuListingScreen.css';

function MenuListingScreen() {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getMenu(id).then((response) => {
      setMenu(response.menu);
    });
  }, [id]);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.itemName === item.itemName);

    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.itemName === item.itemName
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="menu-container">
      <h1>Menu</h1>
      {menu.map((item) => (
        <div key={item.itemName} className="menu-item">
          <div className="menu-item-info">
            <span className="menu-item-title">{item.itemName}</span>
            <span className="menu-item-type">{item.type}</span>
          </div>
          <span className="menu-item-price">₹{item.itemPrice}</span>
          <button
            className="add-to-cart-button"
            onClick={() => handleAddToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      ))}
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default MenuListingScreen;
