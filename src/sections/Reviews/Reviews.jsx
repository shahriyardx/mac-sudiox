import React from 'react'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Review from '../../components/Review/Review'

const Reviews = () => {
  const reviewCount = 6

  return (
    <Container className='py-10'>
      <h1 className='text-3xl font-semibold text-center'>Customer Reviews ({reviewCount})</h1>

      <div className='grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 md:grid-cols-3'>
        <Review />
        <Review />
        <Review />
      </div>

      <div className='mt-5 text-center'>
        <Button text="See all reviews" className='bg-indigo-500 hover:bg-indigo-600' />
      </div>
    </Container>
  )
}

export default Reviews