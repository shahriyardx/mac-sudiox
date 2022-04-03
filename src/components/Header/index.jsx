import Container from '../Container'
import React from 'react'
import NavLink from './NavLink'

const Header = () => {
  return (
    <div className='py-3'>
      <Container className='flex items-center'>
         <div className="text-2xl font-bold uppercase">
            Note 9
         </div>

         <div className='flex items-center gap-3 ml-auto'>
           <NavLink to="/" text="Home"/>
           <NavLink to="/reviews" text="Reviews"/>
           <NavLink to="/dashboard" text="Dashboard"/>
           <NavLink to="/about" text="About"/>
         </div>
      </Container>
    </div>
  )
}

export default Header