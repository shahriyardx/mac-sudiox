import React from 'react'
import useReviews from '../../hooks/useReviews'
import Container from '../components/Container'
import Review from '../components/Review/Review'

const Reviews = () => {
  const reviews = useReviews()
  
  return (
    <>
      <Container className='py-10'>
        <h1 className='text-4xl font-bold text-center text-purple-400'>What our customers say!</h1>

        <div className='grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 md:grid-cols-3'>
          {reviews.map(review => <Review review={review} key={review.id} />)}
        </div>
      </Container>
    </>
  )
}

export default Reviews