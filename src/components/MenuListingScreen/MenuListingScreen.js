import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMenu } from '../../api/getMenu';
import './MenuListingScreen.css';

function MenuListingScreen() {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu(id).then((response) => {
      setMenu(response.menu);
    });
  }, [id]);

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
        </div>
      ))}
    </div>
  );
}

export default MenuListingScreen;
