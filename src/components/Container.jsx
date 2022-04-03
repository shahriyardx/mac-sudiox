import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-6xl px-4 mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container