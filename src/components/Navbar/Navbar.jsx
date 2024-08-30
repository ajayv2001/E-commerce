import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { LuShoppingCart } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const navigate = useNavigate()
  const handleNavigate =()=>{
    navigate('/cart')
  }

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <>
      <div className='navbar'>
        <div className='shopcart_image'>
          <img className='logo-img' onClick={handleNavigate} src="\src\assets\63e86ab4c21faa7bc0bd90dd_Logo.svg" alt="Logo" />
        </div>
        <div className='navbar_items'>
          <Link className='hideOnMoblie' to="/">Home</Link>
          <Link className='hideOnMoblie' to="/category">Category</Link>
          <Link className='hideOnMoblie' to="/bigdeals">Big Deals</Link>
        </div>
        <div className='search_bar'>
          <input className='hideOnMoblie'
            type="text"
            placeholder='Search Product'
          />
          <svg className='hideOnMoblie'  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        </div>
        <div onClick={handleNavigate} className='cart'>
          <LuShoppingCart />
          cart
        </div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          height="24px" 
          viewBox="0 -960 960 960" 
          width="24px" 
          fill="#000000" 
          className='hideOnWeb'
          onClick={showSidebar}
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </svg>
      </div>

      <div 
        className={`sidebar ${sidebarVisible ? 'active' : ''}`}
      >
        <div className='sidebar_items'>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="24px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            fill="#000000" 
            className="close_btn" 
            onClick={hideSidebar}
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
          <Link to="/">Home</Link>
          <Link to="/category">Category</Link>
          <Link to="/bigdeals">Big Deals</Link>
          <div onClick={handleNavigate} className='cart'>
            <LuShoppingCart />
            cart
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
