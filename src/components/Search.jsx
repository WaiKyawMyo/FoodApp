import React, { useEffect, useState } from 'react'
import './Search.css'

const URL='https://api.spoonacular.com/recipes/complexSearch'
const API_KEY='9ea83fe01ca44f58adea53f2cc256630'
export default function Search({fooddata,Setfooddata}) {
    const [query,setquery]=useState('pasta')
    useEffect(()=>{
        async function fatchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data= await res.json()
            Setfooddata(data.results)
            console.log(data.results)
        }
        fatchFood()
    },[query])
  return (
    <div className='container'>
        <input className='input' value={query} onChange={(e)=>setquery(e.target.value)} type="text" />
    </div>
  )
}
