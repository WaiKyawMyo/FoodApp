import React from 'react'
import './Fooditem.css'

export default function Fooditem({food,Setfoodid}) {
  return (
    <div className='itemcontainer'>
        <img className='itemimg' src={food.image} alt="" />
        <div className='itemContent'>
          <p className='itemName'>{food.title}</p>
        </div>
        <div className='buttoncontainer'>
           <button onClick={()=>Setfoodid(food.id)} className='itembutton'>View Recipe</button>
        </div>
       
    </div>
  )
}
