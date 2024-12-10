import React, { useEffect, useState } from 'react'
import './Fooddetail.css'
import Itemlist from './Itemlist'

export default function Fooddetails({foodid}) {
    const URL =`https://api.spoonacular.com/recipes/${foodid}/information`
    const API_KEY='9ea83fe01ca44f58adea53f2cc256630'
    const [food,setFood]=useState({})
    const [isloading,setisloading]=useState(true)
    useEffect(()=>{
        async function fetchFood(){
            const res=await fetch(`${URL}?apiKey=${API_KEY}`)
            const data=await res.json()
            console.log(data)
            setFood(data)
            setisloading(false)
        }
        fetchFood()
    },[foodid])
  return (
    <div >
        <div className='recipeCard'>
            <h1 className='recipeName'>{food.title}</h1>
            <img className='recipeImage' src={food.image} alt="" />

        
        <div className='recipteDetail'>
            <span>
                <strong>⏰{food.readyInMinutes} Minute</strong>
            </span>
            <span>
                👩‍👩‍👧<strong>Serves {food.servings}</strong>
            </span>
            <span>
            <strong> {food.vegetarian? "🥕 Vegetarian": "🍖 Non-Vegetarian"}</strong>
            </span>
            <span>
            <strong>{food.vegan? "🥦 Vegan": ''}</strong>
            </span>
        </div>
        <div>
            <span><strong>💲{food.pricePerServing } Per serving</strong></span>
        </div>
        <div>
            <h2>Ingredients</h2>
             <Itemlist food={food} isloading={isloading}/>
        </div>
        <h2>Instructions</h2>
        
        <div className='recipeInterstings'>
            <ol >
                {isloading? (<p>Loading.....</p>):
                    (
                    food.analyzedInstructions[0].steps.map((step)=>(<li key={step.number}>{step.step}</li>))
                    )
                }
            </ol>
            
        </div>
        </div>
    </div>
  )
}
