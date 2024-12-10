import React from 'react'
import Fooditem from './Fooditem'

export default function Foodlist({fooddata,Setfoodid}) {
  return (
    <div>
    {fooddata.map((food)=>(
        <Fooditem key={food.id} Setfoodid={Setfoodid} food={food}/>
    ))}
    </div>
  )
}
