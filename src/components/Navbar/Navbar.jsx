import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { LuShoppingCart } from 'react-icons/lu';

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

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
          <img src="\src\assets\63e86ab4c21faa7bc0bd90dd_Logo.svg" alt="Logo" />
        </div>
        <div className='navbar_items'>
          <Link className='hideOnMoblie' to="/category">Category</Link>
          <Link className='hideOnMoblie' to="/whats-new">What's new</Link>
          <Link className='hideOnMoblie' to="/big-deals">Big Deals</Link>
        </div>
        <div className='search_bar'>
          <input className='hideOnMoblie'
            type="text"
            placeholder='Search Product'
          />
        </div>
        <div className='cart'>
          <LuShoppingCart />
          cart
        </div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          height="24px" 
          viewBox="0 -960 960 960" 
          width="24px" 
          fill="#000000" 
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
          <Link to="/category">Category</Link>
          <Link to="/whats-new">What's new</Link>
          <Link to="/big-deals">Big Deals</Link>
          <div className='cart'>
            <LuShoppingCart />
            cart
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
