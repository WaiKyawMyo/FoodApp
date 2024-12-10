import React from 'react'
import Item from './Item'

export default function Itemlist({food,isloading}) {
  return (
    <div>
        {isloading? (<p>Loading....</p>) : (food.extendedIngredients.map((item)=>
            <Item key={item.id} item={item}/>
        ))}
          
    </div>
  )
}
