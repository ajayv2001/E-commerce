import React from 'react'
import "./Category.css"
import { List } from '../Home/List'

const Category = () => {
  return (
    <div className='category-container'>
        {List.map((items)=>(
            <div className='category' key={items.id}>
                <img src={items.image} alt="image" className='category-image' />
                <h2 className='category-title'>{items.name}</h2>

            </div>
        ))}
      
    </div>
  )
}

export default Category
