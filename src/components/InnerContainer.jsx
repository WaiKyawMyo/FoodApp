import React from 'react'
import './InnerContainer.css'

export default function InnerContainer({children}) {
  return (
    <div className='innercontainer'>
        {children}
    </div>
  )
}
