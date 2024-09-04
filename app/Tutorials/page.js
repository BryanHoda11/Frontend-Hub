"use client"

import React from 'react'
import Link from 'next/link'

const tutorial = () => {

  return (

    <>
      <div className='headers text-black'>
        <ul className='flex items-center gap-10 px-5 justify-around my-4 mt-7 overflow-x-scroll scrollbar sm:overflow-hidden'>
          <Link href="/Tutorials/HTML" className='text-sm sm:text-lg lg:text-xl max-w-[20%] font-bold cursor-pointer hover:scale-90 hover:text-violet-800 transition-all duration-200'>HTML5</Link>
          <Link href="/Tutorials/CSS" className='text-sm sm:text-lg lg:text-xl max-w-[20%] font-bold cursor-pointer hover:scale-90 hover:text-violet-800 transition-all duration-200'>CSS</Link>
          <Link href="/Tutorials/Javascript" className='text-sm sm:text-lg lg:text-xl max-w-[20%] font-bold cursor-pointer hover:scale-90 hover:text-violet-800 transition-all duration-200'>JavaScript</Link>
          <Link href="/Tutorials/Tailwind" className='text-sm sm:text-lg lg:text-xl max-w-[20%] font-bold cursor-pointer hover:scale-90 hover:text-violet-800 transition-all duration-200'>Tailwind</Link>
          <Link href="/Tutorials/Reactjs" className='text-sm sm:text-lg lg:text-xl max-w-[20%] font-bold cursor-pointer hover:scale-90 hover:text-violet-800 transition-all duration-200'>React</Link>
          <Link href="/Tutorials/Nextjs" className='text-sm sm:text-lg lg:text-xl max-w-[20%] font-bold cursor-pointer hover:scale-90 hover:text-violet-800 transition-all duration-200'>Next.js</Link>
        </ul>
      </div>

      <hr className='h-[2px] w-[98%] mx-auto opacity-20 bg-violet-900 my-0 sm:my-8' />

      <p className='text-xs w-[85%] mx-auto sm:text-sm md:text-lg my-3 text-violet-800 font-bold'> <span className='underline font-bold'>Note</span> : In each of the above sub pages I did only the introdution along with few topics only as it wasn't possible for me to cover all topics. I just  wanted to practice dynamic routes and show the UI of how each page will look. Thanks for the co-operation :) </p>

      <div className="question">
        <h1 className='text-violet-600 animate-pulse font-bold text-2xl sm:text-4xl lg:text-6xl text-center mt-40 opacity-20 cursor-default'>What you want to learn ? </h1>
      </div>
    </>
  )
}

export default tutorial
