import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchScreen from './components/SearchScreen/SearchScreen';
import MenuListingScreen from './components/MenuListingScreen/MenuListingScreen';
import OrderScreen from './components/OrderScreen/OrderScreen';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Router>
      <div>
        <Cart />
        <Routes>
          <Route path="/" element={<SearchScreen />} />
          <Route path="/menu/:id" element={<MenuListingScreen />} />
          <Route path="/order" element={<OrderScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
