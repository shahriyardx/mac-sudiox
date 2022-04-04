import React from 'react'

export const Post = ({ post }) => {
  const { title, content } = post

  return (
    <div className='p-4 rounded-md bg-zinc-600/20'>
      <h2 className='mb-2 text-lg'>{title}</h2>
      <p className='text-slate-400'>
        {content}
      </p>
    </div>
  )
}
