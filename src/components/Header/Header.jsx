import Container from '../Container'
import React from 'react'
import NavLink from './NavLink'

const Header = () => {
  return (
    <div className='py-3'>
      <Container className='flex flex-col items-center justify-center gap-3 sm:gap-0 sm:flex-row'>
         <div className="text-2xl font-bold uppercase">
            MAC STUDIO
         </div>

         <div className='flex items-center gap-3 sm:ml-auto'>
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