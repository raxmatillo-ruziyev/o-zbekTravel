import React from 'react'
import './Button.scss'

const Button = ({ name, color }) => {
  return (
    <>
    <a href="#contact">
    <button 
        className='btn' 
        style={{ background: color }} 
      >
        {name}
      </button>
    </a>
    </>
  )
}

export default Button
