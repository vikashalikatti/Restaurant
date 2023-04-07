import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchScreen.css';

function SearchScreen({ handleCartVisible }) {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    handleCartVisible(false);
    return () => handleCartVisible(true);
  }, [handleCartVisible]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/menu/${search}`);
    }
  };

  return (
    <div className="search-container">
      <h1>Search for a Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter restaurant ID"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchScreen;
