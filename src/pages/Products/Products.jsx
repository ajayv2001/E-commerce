import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import "./Products.css";
import { CartContext } from '../../Context/Context';

const Products = () => {
  const [allItems, setAllItems] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [sortOption, setSortOption] = useState("");


  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(response => {
        const mainData = response.data.filter(item => item.id<=51)
        setAllItems(mainData);
        setItems(mainData);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading.......</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filterByCategory = (category) => {
    if (category) {
      setItems(allItems.filter(item => item.category.name === category));
    } else {
      setItems(allItems); 
    }
  };

  const sortItems = (option) => {
    let sortedItems = [...items];
    if (option === "lowToHigh") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (option === "highToLow") {
      sortedItems.sort((a, b) => b.price - a.price);
    }
    setItems(sortedItems);
  };

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
    sortItems(option); 
  };

  // console.log(items);
  // items.forEach(item => console.log(item.category.name));
  

  return (
    <div className="shopping-cart">
      <h1>All Products</h1>
      <div className="product-page">
        <div className="sort-list">


          <label htmlFor="Categories">Categories</label>
          <select name="" id="" onChange={(e)=>filterByCategory(e.target.value)} defaultValue="">
            <option value="">All Products</option>
            <option value="Clothes">Clothes</option>
            <option value="Electronics">Electronics</option>
            <option value="Shoes">Shoes</option>
            <option value="Change title">furniture</option>
            <option value="Miscellaneous">Other Accessories</option>
          </select>


          <label htmlFor="Sort by">Sort by</label>
          <select name="" id=""  defaultValue="" onChange={handleSortChange}>
            <option value="">Featured</option>
            <option value="lowToHigh">Price:Low to High</option>
            <option value="highToLow">Price:High to Low</option>
          </select>

        </div>
        <div className="item-list">
          {items.map(item => (
            <div key={item.id} className="item-card">
              <img src={item.images && item.images.length > 0 ? item.images[0] : 'https://via.placeholder.com/640x480?text=No+Image'} alt={item.title} className="item-image" />
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
    </div>
  );
};

export default Products;