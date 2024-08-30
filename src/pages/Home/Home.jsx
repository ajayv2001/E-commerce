import React from 'react'
import './Home.css'
import Card from './Card'
import Deals from './Deals'

const Home = () => {
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
      <div className='best-deals'>
        <h1>Todays Best Deals for you!</h1>
        <div className='deals'>
          <Deals/>
        </div>
      </div>
    </div>
  )
}

export default Home
