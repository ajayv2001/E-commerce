import React from 'react';
import { DealList } from './DealList';
import "./Home.css";

const Deals = () => {
  return (
    <div className='deals'>
        {DealList.map((items) => (
            <div className='deal-detials' key={items.id}>
                <img src={items.image} alt={items.name} className='deal-image' />
                <h2 className='deal-title'>{items.name}</h2>
                <p className='deal-price'>${items.price}</p>
                <button className='addto-cart'>Add to cart</button>
            </div>
        ))}
    </div>
  );
}

export default Deals;
