import React from 'react'
import { List } from './List'
import "./Home.css"

const Card = () => {
  return (
    <div className='card-container'>
        {List.map((items)=>(
            <div className='card' key={items.id}>
                <img src={items.image} alt="image" className='card-image' />
                <h2 className='card-title'>{items.name}</h2>

            </div>
        ))}
      
    </div>
  )
}

export default Card
