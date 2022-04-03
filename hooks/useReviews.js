import { useState, useEffect } from 'react'

const useReviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch("/reviews.json")
      .then(response => response.json())
      .then(data => {
        setReviews(data.reviews)
      })
  }, [])

  return reviews
}

export default useReviews