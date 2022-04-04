import Container from '../Container'
import React from 'react'
import NavLink from './NavLink'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='py-3'>
      <Container className='flex flex-col items-center justify-center gap-3 sm:gap-0 sm:flex-row'>
         <div className="text-2xl font-bold uppercase">
            <Link to="/" className='text-zinc-400 hover:text-white'>MAC STUDIO</Link>
         </div>

         <nav className='flex items-center gap-3 sm:ml-auto'>
           <NavLink to="/" text="Home"/>
           <NavLink to="/reviews" text="Reviews"/>
           <NavLink to="/dashboard" text="Dashboard"/>
           <NavLink to="/blog" text="Blog"/>
         </nav>
      </Container>
    </header>
  )
}

export default Header