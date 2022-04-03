import React from 'react'
import useReviews from '../../../hooks/useReviews'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Review from '../../components/Review/Review'

const Reviews = () => {
  const reviews = useReviews()

  return (
    <Container className='py-10'>
      <h1 className='text-3xl font-semibold text-center'>Customer Reviews ({reviews.length})</h1>

      <div className='grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 md:grid-cols-3'>
        {reviews.slice(0, 3).map(review => <Review review={review} key={review.id} />)}
      </div>

      <div className='mt-5 text-center'>
        <Button text="See all reviews" className='bg-indigo-500 hover:bg-indigo-600' />
      </div>
    </Container>
  )
}

export default Reviews