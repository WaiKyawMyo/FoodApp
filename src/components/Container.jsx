import React from 'react'
import './Container.css'

export default function Container({children}) {
  return (
    <div className='parentContainer'>
        {children}
    </div>
  )
}
