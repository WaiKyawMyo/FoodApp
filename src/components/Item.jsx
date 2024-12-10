import React from 'react'
import './item.css'

export default function Item({item}) {
  return (
    <div>
        <div className='itemcontainers'>
            <div className='itemimage'>
             <img className='imgforing' src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`} alt="" />
            </div>
            <div>
                <div className='namecontainer'>
                    <div className='name'>{item.name}</div>
                </div>
                
                <div className='amount'>
                    {item.amount}{item.unit}
                </div>
            </div>
                
        </div>
    </div>
  )
}
