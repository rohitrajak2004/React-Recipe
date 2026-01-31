import React from 'react'

const Footer = () => {
  return (
    <footer  className='h-60 p-6 md:px-16 md:h-52 lg:px-24 w-full bg-[#F9F9F9] relative mt-5'>
      <div>
        <h1 className="font-cursive text-4xl font-semibold tracking-wide w-fit mb-3 md:text-5xl lg:text-6xl ">
          Tastebite
        </h1>
        <h4>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment"</h4>
      </div>
      <hr  className='h-0.5 mt-4 text-stone-400'/>
      <div className='flex justify-center items-center'>
        <h4 className='absolute bottom-2'>© 2026 Tastebite - All rights reserved</h4> 
      </div>
    </footer>
  )
}

export default Footer