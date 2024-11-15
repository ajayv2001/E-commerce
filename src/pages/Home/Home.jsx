import React,{useState,useEffect, useContext} from 'react'
import './Home.css'
import Card from './Card'
import Deals from './Deals'
import axios from 'axios'
import { CartContext } from '../../Context/Context'


const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const{addToCart}=useContext(CartContext)
  
  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(response => {
        const mainData = response.data.slice(11,18);
        setItems(mainData);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className='home'>
      <div className='home-img'>
        <img src="\src\assets\pexels-karolina-grabowska-5632371.jpg" alt="Shopping Experience" />
        <h3 className='home-title'>"Experience Shopping Like <br /> Never Before"</h3>
      </div>
      <div className='category'>
        <h1 className='cat-title'>Shop our top categories</h1>
        <div className='category-list'>
          <Card/>
        </div>
      </div>
      <div className="product-card">
          {items.map(item => (
            <div key={item.id} className="deal-detials">
              <img src={item.images && item.images.length > 0 ? item.images[0] : 'https://via.placeholder.com/640x480?text=No+Image'} alt={item.title} className="product-image" />
              <h2 className="deal-title">{item.title}</h2>
              <p className="deal-price">${item.price}</p>
              <button
                className='add-to-cart'
                onClick={()=>addToCart(item)}
               
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      <div className='best-deals'>
        <h1>Launching Soon</h1>
        <div className='deals'>
          <Deals/>
        </div>
      </div>
    </div>
  )
}

export default Home
