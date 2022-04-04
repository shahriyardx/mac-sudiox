import { useState, useEffect } from 'react'

const usePosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("/posts.json")
      .then(response => response.json())
      .then(data => {
        setPosts(data.posts)
      })
  }, [])

  return posts
}

export default usePosts