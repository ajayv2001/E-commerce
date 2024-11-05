import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import "./BIgDeals.css";
import { CartContext } from '../../Context/Context';

const BigDeals = () => {
  const [items, setItems] = useState([]);
  const[loading,setLoading]=useState(true)
  const[error , setError]=useState(null)
  const { addToCart} = useContext(CartContext);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(response =>{
      setItems(response.data)
      setLoading(false)
    })
    .catch(error =>{
      setError(error)
      setLoading(false)
    })
  },[])
  if(loading) return <p>Loading.......</p>
  if(error) return <p>Error ;{error.message}</p>

  

  return (
    <div className="shopping-cart">
      <h1>Fashion Items</h1>
      <div className="item-list">
        {items.map(item => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.title} className="item-image" />
            <h2 className="item-name">{item.title}</h2>
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
