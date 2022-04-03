import React from 'react'

const Button = ({ text, className, onClick }) => {
  return (
    <button className={`px-4 py-2 rounded-md ${className}`} onClick={onClick}>{text}</button>
  )
}

export default Button