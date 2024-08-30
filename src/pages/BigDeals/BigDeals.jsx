import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import "./BIgDeals.css";
import { CartContext } from '../../Context/Context';

const BigDeals = () => {
  const [items, setItems] = useState([]);
  const { addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('https://66d0c93e181d059277dfbbe7.mockapi.io/api/shoppingcart/fashion')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="shopping-cart">
      <h1>Fashion Items</h1>
      <div className="item-list">
        {items.map(item => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <h2 className="item-name">{item.name}</h2>
            <p className="item-price">${item.price}</p>
            <button
              className='add-to-cart'
              onClick={() => addToCart(item)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigDeals;
