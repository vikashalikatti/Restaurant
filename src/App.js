import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchScreen from './components/SearchScreen/SearchScreen';
import MenuListingScreen from './components/MenuListingScreen/MenuListingScreen';
import OrderScreen from './components/OrderScreen/OrderScreen';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(true);

  const handleCartVisible = (visible) => {
    setCartVisible(visible);
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.itemName === item.itemName);

      if (existingItem) {
        return prevItems.map((i) =>
          i.itemName === item.itemName ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SearchScreen handleCartVisible={handleCartVisible} />} />
          <Route path="/menu/:id" element={<MenuListingScreen addToCart={addToCart} />} />
          <Route path="/order" element={<OrderScreen cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
