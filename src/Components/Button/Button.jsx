import React from 'react'
import './Button.scss'

const Button = ({ name, color }) => {
  return (
    <>
      <button 
        className='btn' 
        style={{ background: color }} 
      >
        {name}
      </button>
    </>
  )
}

export default Button
