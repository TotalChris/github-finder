import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Missing() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-8xl font-bold mb-8'>Whoa, there!</h1>
          <p className='text-5xl mb-8'>Error 404 - Page Not Found</p>
          <Link to='/' className='btn btn-primary btn-lg bg-gray-700 text-neutral-content'>
            <FaHome className='mr-2'></FaHome>
            Go Back Home
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Missing