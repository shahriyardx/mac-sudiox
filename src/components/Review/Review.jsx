import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Review = () => {
  const author = "Shahriyar"
  const content = "This thing is a beast because of its performance"
  const stars = 4

  return (
    <div className='p-4 rounded-md bg-zinc-500/20'>
      <div className='flex items-center justify-between mb-3'>
        <div className='flex items-center gap-2'>
          <img className='w-8 h-8 rounded-full' src={`https://avatars.dicebear.com/api/adventurer-neutral/${author}.svg`} alt={author} />
          <h2 className='text-xl font-bold'>{author}</h2>
        </div>
        <div className='flex gap-1'>
          {[...Array(stars)].map((_, index) => <AiFillStar key={index} className='text-orange-300' />)}
          {[...Array(5 - stars)].map((_, index) => <AiOutlineStar key={index} />)}
        </div>
      </div>
      <p className='text-slate-400'>{content}</p>
    </div>
  )
}

export default Review