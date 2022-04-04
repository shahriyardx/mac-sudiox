import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Container from '../components/Container'

const E404 = () => {
  const navigate = useNavigate()

  return (
    <Container className='py-20 text-center'>
      <h1 className='text-6xl font-bold text-center text-red-400 uppercase'>Not Found</h1>
      <p className='mt-3 mb-10 text-slate-300'>The page you are looking for is not found</p>

      <div className=''>
        <Button text='Back to home' className='text-black bg-white' onClick={() => navigate('/')} />
      </div>
    </Container>
  )
}

export default E404