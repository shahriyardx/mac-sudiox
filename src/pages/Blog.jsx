import React from 'react'
import usePosts from '../../hooks/usePosts'
import Container from '../components/Container'
import { Post } from '../components/Post'

const Blog = () => {
  const posts = usePosts()

  return (
    <Container className='py-10'>
      <h1 className='mb-10 text-3xl font-bold text-center text-purple-400 uppercase'>Blog</h1>

      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        {posts.map(post => <Post post={post} key={post.id} />)}
      </div>
    </Container>
  )
}

export default Blog