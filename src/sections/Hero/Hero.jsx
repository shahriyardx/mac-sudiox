import React from 'react'
import Container from '../../components/Container'
import MacStudio from './macstudio.png'

const Hero = () => {
  return (
    <Container className='py-20'>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
        <div className='md:order-2'>
          <img className='w-96 md:w-full max-w-[90%] md:max-w-[100%] mx-auto' src={MacStudio} alt="Mac Studio" />
        </div>
        <div className='flex flex-col justify-center text-center md:order-1 md:text-left'>
          <div>
            <h1 className='text-4xl font-bold'>Apple Mac Studio</h1>
            <h1 className='text-4xl font-bold text-indigo-500'>Filled with <span className='relative underline decoration-indigo-300'>performance</span></h1>
          </div>

          <div>
            <p className='mt-5 text-lg text-slate-400'>
              The new apple mac studio is a small computer as your previous mac mini 
              but this time it has the power you would've never imagined in such a small 
              form factor. It has the fastest chip (M1 Ultra) which delivers <span className='font-bold underline'>3.7x</span> more 
              performance with less power than any other chip on this planet
            </p>
          </div>

          <div className='mt-10'>
            <a href='https://www.apple.com/mac-studio/' target='_blank' className='px-4 py-3 text-lg bg-indigo-500 rounded-md hover:bg-indigo-600'>Show Information</a>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Hero