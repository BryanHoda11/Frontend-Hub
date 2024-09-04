"use client"

import React, { useState } from 'react'
import { FaRegCircle } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Link from 'next/link';

const Tailwindpage = () => {
  const [left, setleft] = useState(false);

  const handleLeft = () => {
    setleft(!left)
  }

  return (
    <>
      <div className="tailwind-container block lg:flex lg:gap-2 relative">
        <div className="toggle-left block lg:hidden">
          {left ? <FaTimes onClick={handleLeft} className='pl-3 z-20 absolute text-violet-600 hover:text-violet-800 transition-all duration-200 ease-in cursor-pointer' style={{ fontSize: '23px' }} /> : <GiHamburgerMenu onClick={handleLeft} className='pl-3 text-violet-600 hover:text-violet-800 transition-all duration-200 ease-in cursor-pointer' style={{ fontSize: '23px' }} />}
        </div>

        <div className="left bg-violet-200 hidden lg:flex flex-col min-w-[23%] h-[80vh] overflow-y-scroll text-black py-7 px-8">
          <div className="intro my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>INTRODUCTION</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> What is Tailwind CSS?</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Why use Tailwind?</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Installation</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Utility-first Fundamentals</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Hover, Focus and other States</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Responsive Design</li>
            </ul>
          </div>

          <div className="layout my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>LAYOUT</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Display</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Box Sizing</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Floats & Clear</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Object Fit</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Overflow</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Overscroll Behaviour</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Positions</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Z-Index</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Top / Right / Bottom / Left</li>
            </ul>
          </div>

          <div className="flexbox-grid my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>FLEXBOX & GRID</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Flexbox Basics</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Flex Direction</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Flex Wrap</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Flex Grow & Shrink</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Order in Flexbox & Grid</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Grid Template Rows & Columns</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Grid Auto Rows & Columns</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Gap</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Justify Content & Items</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Align Content & Items</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Place Content & Items</li>
            </ul>
          </div>

          <div className="sizing my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>SIZING</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Width</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Min & Max Width</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Height</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Min & Max Height</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Size</li>
            </ul>
          </div>

          <div className="borders my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>BORDERS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Border Radius</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Border Width</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Border Color</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Border Style</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Ring Width</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Ring Color</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Ring Style</li>
            </ul>
          </div>

          <div className="effects my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>EFFECTS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Box Shadow</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Box Shadow Color</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Opacity</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Mix Blend Mode</li>
            </ul>
          </div>
        </div>

        {left && <div className="left-2 bg-violet-200 lg:flex flex-col w-[95%] sm:w-1/2 lg:w-[23%] h-[100vh] z-10 absolute overflow-y-scroll text-black py-7 px-8">
          <div className="intro my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>INTRODUCTION</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> What is Tailwind CSS?</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Why use Tailwind?</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Installation</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Utility-first Fundamentals</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Hover, Focus and other States</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Responsive Design</li>
            </ul>
          </div>

          <div className="layout my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>LAYOUT</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Display</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Box Sizing</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Floats & Clear</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Object Fit</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Overflow</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Overscroll Behaviour</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Positions</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Z-Index</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Top / Right / Bottom / Left</li>
            </ul>
          </div>

          <div className="flexbox-grid my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>FLEXBOX & GRID</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Flexbox Basics</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Flex Direction</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Flex Wrap</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Flex Grow & Shrink</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Order in Flexbox & Grid</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Grid Template Rows & Columns</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Grid Auto Rows & Columns</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Gap</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Justify Content & Items</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Align Content & Items</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Place Content & Items</li>
            </ul>
          </div>

          <div className="sizing my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>SIZING</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Width</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Min & Max Width</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Height</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Min & Max Height</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Size</li>
            </ul>
          </div>

          <div className="borders my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>BORDERS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Border Radius</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Border Width</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Border Color</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Border Style</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Ring Width</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Ring Color</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Ring Style</li>
            </ul>
          </div>

          <div className="effects my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>EFFECTS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Box Shadow</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Box Shadow Color</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Opacity</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Mix Blend Mode</li>
            </ul>
          </div>
        </div>}

        <div className="right w-full lg:w-[75%] z-0 text-black py-5 px-3 mb-6">
          <div className="intro mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>What is Tailwind CSS?</h1>
            <p className='text-md my-2 text-violet-700'>Tailwind CSS is a CSS framework which follows utility class first approach. Using these classes we can put inline CSS styles within a HTML element.</p>

            <div className='bg-violet-400 w-[95%] sm:w-[80%] lg:w-1/2 mx-auto rounded-lg my-4 flex justify-center px-5 py-4 gap-2 text-black font-bold'>
              <span>{'<h2 className="text-2xl font-bold">I am Bryan</h2>'}</span>
            </div>
            <span className='flex items-center gap-3'>Ouput : <h2 className="text-md sm:text-xl font-bold">I am Bryan</h2> </span>

            <div className="my-5">
              <h3 className='text-lg text-violet-500 font-bold'>Why use Tailwind ?</h3>
              <p className='text-md my-2 text-violet-700'>Tailwind CSS is used to speed up development and production. It is a very modern way of adding styles to HTML elements. It also saves time as we do not have to create any external CSS files. We can also do Responsive designs using 'Breakpoints' instead of Media Queries. Tailwind offers other benefits over Vanilla CSS which is really helpful in developing large-scale projects. </p>
            </div>


            <div className="installation mx-0 lg:mx-5 my-5">
              <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Installation</h1>
              <p className='text-md my-2 text-violet-700'>Tailwind CSS is a CSS framework that can be installed via npm and used with React & Next.js applications to speed up development and production. With this we can write HTML CSS JS all in one file which saves a lot of time unlike making separate files for each.</p>

              <p className='text-md my-2 text-violet-700 font-bold'>Run the following commands in order :</p>

              <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='bg-violet-400 w-[95%] sm:w-[80%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                  <h3 className='text-lg font-bold text-black'>STEP 1 - Terminal : </h3>
                  <span>{'npm install -D tailwindcss postcss autoprefixer'}</span>
                  <span>{'npx tailwindcss init -p'}</span>
                </div>

                <div className='bg-violet-400 w-[95%] sm:w-[80%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                  <h3 className='text-lg font-bold text-black pt-3'>STEP 2 - Update Tailwind.Config.js  : </h3>
                  <span>{'content: ['}</span>
                  <span className='px-5'>{'"./index.html",'}</span>
                  <span className='px-5'>{'"./src/**/*.{js,ts,jsx,tsx}",'}</span>
                  <span>{'],'}</span>
                </div>

                <div className='bg-violet-400 w-[95%] sm:w-[80%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                  <h3 className='text-lg font-bold text-black pt-3'>STEP 3 - Index.css : </h3>
                  <span>{'@tailwind base;'}</span>
                  <span>{'@tailwind components;'}</span>
                  <span>{'@tailwind utilities;'}</span>
                </div>

                <div className='bg-violet-400 w-[95%] sm:w-[80%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                  <h3 className='text-lg font-bold text-black'>STEP 4 - Terminal : </h3>
                  <span>{'npm start OR npm run dev'}</span>
                </div>
              </div>
              <p className='text-lg mb-4 mt-5 text-violet-700 font-bold'>You are good to go!</p>
            </div>

            <div className="responsive mx-0 lg:mx-5 my-5">
              <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Responsive Design</h1>
              <p className='text-md my-2 text-violet-700'>Every utility class in Tailwind can be applied conditionally at different breakpoints, which makes it a piece of cake to build complex responsive interfaces without ever leaving your HTML. all you need to do is prefix the utility with the breakpoint name, followed by the {':'} character.</p>
              <p className='text-violet-700 font-bold py-3'>With this we can make our websites look good across all screen sizes!</p>

              <div className='bg-violet-400 w-full mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h3 className='text-center text-sm lg:text-md font-bold text-black'>There are five breakpoints by default, inspired by common device resolutions </h3>

                <div className='pt-5 grid grid-cols-2 xl:grid-cols-3 mx-auto'>
                  <ul className='flex flex-col gap-2 mx-10'>
                    <h4 className='font-bold text-black pb-1'>Breakpoint prefix</h4>
                    <li>'sm'</li>
                    <li>'md'</li>
                    <li>'lg'</li>
                    <li>'xl'</li>
                    <li>'2xl'</li>
                  </ul>

                  <ul className='flex flex-col gap-2 mx-10'>
                    <h4 className='font-bold text-black pb-1'>Minimum width</h4>
                    <li className='text-violet-800 opacity-70 font-bold'>640px</li>
                    <li className='text-violet-800 opacity-70 font-bold'>768px</li>
                    <li className='text-violet-800 opacity-70 font-bold'>1024px</li>
                    <li className='text-violet-800 opacity-70 font-bold'>1280</li>
                    <li className='text-violet-800 opacity-70 font-bold'>1536</li>
                  </ul>

                  <ul className='hidden xl:flex flex-col gap-2 mx-10'>
                    <h4 className='font-bold text-black pb-1'>CSS</h4>
                    <li>{'@media (min-width: 640px) { ... }'}</li>
                    <li>{'@media (min-width: 768px) { ... }'}</li>
                    <li>{'@media (min-width: 1024px) { ... }'}</li>
                    <li>{'@media (min-width: 1280px) { ... }'}</li>
                    <li>{'@media (min-width: 1536px) { ... }'}</li>
                  </ul>
                </div>

                <p className='text-black text-sm lg:text-md font-bold pt-7 pb-3 text-center'>This works for every utility class in the framework, which means you can change literally anything at a given breakpoint.</p>
              </div>
            </div>
          </div>

          <div className="display mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Layout &rarr; Display</h1>
            <p className='text-md my-2 text-violet-700'>By mentioning in the className the type of display, we can set a particular type of display for that element.</p>

            <div className='bg-violet-400 w-full mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
              <h3 className='px-4 font-bold text-sm md:text-md text-black'> Utilities for controlling the display box type of an element : </h3>

              <div className='pt-5 flex justify-between sm:justify-around items-baseline'>
                <ul className='flex flex-col gap-2'>
                  <h4 className='font-bold text-black pb-1'>Class</h4>
                  <li>block</li>
                  <li>inline</li>
                  <li>inline-block</li>
                  <li>flex</li>
                  <li>table</li>
                  <li>grid</li>
                  <li>hidden</li>
                  <li>inline-flex</li>
                </ul>

                <ul className='flex flex-col gap-2'>
                  <h4 className='font-bold text-black pb-1'>Properties</h4>
                  <li className='text-violet-800 opacity-70 font-bold'>display: block;</li>
                  <li className='text-violet-800 opacity-70 font-bold'>display: inline;</li>
                  <li className='text-violet-800 opacity-70 font-bold'>display: inline-block;</li>
                  <li className='text-violet-800 opacity-70 font-bold'>display: flex;</li>
                  <li className='text-violet-800 opacity-70 font-bold'>display: table;</li>
                  <li className='text-violet-800 opacity-70 font-bold'>display: grid;</li>
                  <li className='text-violet-800 opacity-70 font-bold'>display: none;</li>
                  <li className='text-violet-800 opacity-70 font-bold'>display: inline-flex;</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="positions mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Layout &rarr; Positions</h1>
            <p className='text-md my-2 text-violet-700'>By mentioning in the className the type of positon, we can set a particular type of position for that element.</p>

            <div className='bg-violet-400 w-[95%] sm:w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
              <h3 className='text-center text-sm md:text-md font-bold text-black'>Utilities for controlling how an element is positioned in the DOM : </h3>

              <div className='pt-5 flex justify-between sm:justify-around items-baseline'>
                <ul className='flex flex-col gap-2'>
                  <h4 className='font-bold text-black pb-1'>Class</h4>
                  <li>static</li>
                  <li>fixed</li>
                  <li>absolute</li>
                  <li>sticky</li>
                  <li>relative</li>
                </ul>

                <ul className='flex flex-col gap-2'>
                  <h4 className='font-bold text-black pb-1'>Properties</h4>
                  <li className='text-violet-800 opacity-70 font-bold'>position: static;</li>
                  <li className='text-violet-800 opacity-70 font-bold'>position: fixed;</li>
                  <li className='text-violet-800 opacity-70 font-bold'>position: absolute;</li>
                  <li className='text-violet-800 opacity-70 font-bold'>position: sticky;</li>
                  <li className='text-violet-800 opacity-70 font-bold'>position: relative;</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flexbox mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Flexbox in Tailwind</h1>
            <p className='text-md my-2 text-violet-700'>Flexbox is a very important concept used in CSS to style several elements in a dynamic way. Flex property makes the parent element a flexbox and it's children display horizontally. Corresponding to it we can set flex direction, gap between elements, alignment, justify content & more.</p>

            <div className='bg-violet-400 w-full lg:w-[80%] mx-auto rounded-lg my-4 flex flex-col lg:flex-row gap-5 items-center justify-center px-5 py-4 text-black font-bold'>
              <div className='boxes'>
                <h4 className='font-bold text-black pb-1'>Without Flex :</h4>
                <div className="box border-2 my-3 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px]"></div>
                <div className="box border-2 my-3 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px]"></div>
                <div className="box border-2 my-3 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px]"></div>
                <div className="box border-2 my-3 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px]"></div>
              </div>

              <h4 className='font-bold inline lg:hidden text-black pb-1'>With Flex :</h4>
              <div className='boxes flex items-center gap-2'>
                <h4 className='font-bold hidden lg:inline text-black pb-1'>With Flex :</h4>
                <div className="box border-2 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px]"></div>
                <div className="box border-2 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px]"></div>
                <div className="box border-2 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px]"></div>
                <div className="box border-2 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px]"></div>
              </div>
            </div>

            <div className="flex-direction my-5">
              <h3 className='text-lg text-violet-500 font-bold'>Flex Direction</h3>
              <p className='text-md my-2 text-violet-700'>Flex Direction helps us align items within a flexbox in a certain direction. Below are examples: </p>

              <div className='bg-violet-400 w-full rounded-lg my-4 flex flex-col items-center justify-center md:grid grid-cols-2 px-5 py-4 text-black font-bold'>
                <div className='boxes'>
                  <h4 className='font-bold text-black pb-1'>Flex Column :</h4>
                  <div className="flex-col">
                    <div className="box border-2 my-3 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px] text-center text-xl font-bold">1</div>
                    <div className="box border-2 my-3 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px] text-center text-xl font-bold">2</div>
                    <div className="box border-2 my-3 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px] text-center text-xl font-bold">3</div>
                  </div>
                </div>

                <div className='boxes'>
                  <h4 className='font-bold text-black pb-1'>Flex Column Reverse :</h4>
                  <div className="flex flex-col-reverse gap-3">
                    <div className="box border-2 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px] text-center text-xl font-bold">1</div>
                    <div className="box border-2 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px] text-center text-xl font-bold">2</div>
                    <div className="box border-2 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px] text-center text-xl font-bold">3</div>
                  </div>
                </div>

                <div className='boxes pt-7'>
                  <h4 className='font-bold text-black pb-1'>Flex row :</h4>
                  <div className="flex gap-3">
                    <div className="box border-2 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px] text-center text-xl font-bold">1</div>
                    <div className="box border-2 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px] text-center text-xl font-bold">2</div>
                    <div className="box border-2 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px] text-center text-xl font-bold">3</div>
                  </div>
                </div>

                <div className='boxes pt-7'>
                  <h4 className='font-bold text-black pb-1'>Flex Row Reverse :</h4>
                  <div className="flex flex-row-reverse gap-3">
                    <div className="box border-2 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px] text-center text-xl font-bold">1</div>
                    <div className="box border-2 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px] text-center text-xl font-bold">2</div>
                    <div className="box border-2 border-black h-[50px] sm:h-[100px] w-[50px] sm:w-[100px] text-center text-xl font-bold">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="borders mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Borders in Tailwind</h1>
            <p className='text-md my-2 text-violet-700'>Borders are a fun little CSS style that adds borders to elements. We can change it's width, color & style to make elements appear dynamically.</p>

            <div className='bg-violet-400 w-full sm:w-[80%] md:w-1/2 mx-auto rounded-lg my-4 flex gap-5 items-center justify-center px-5 py-4 text-black font-bold'>
              <div className='box flex gap-4'>
                <span className='font-bold text-lg'>Border &rarr;</span>
                <div className="box border-4 rounded-lg border-black h-[100px] w-[100px]"></div>
                <span className='font-bold text-lg pt-16'>&larr; Border</span>
              </div>
            </div>

            <div className="border-width-style my-5">
              <h3 className='text-lg text-violet-500 font-bold'>Borders &rarr; Width & Style</h3>
              <p className='text-md my-2 text-violet-700 font-bold'>We can change a border's width and style as shown :</p>

              <div className='bg-violet-400 w-full sm:w-[80%] mx-auto rounded-lg my-4 flex gap-5 items-center justify-center px-5 py-4 text-black font-bold'>
                <div className='flex flex-col items-center gap-6'>
                  <h3 className='font-bold text-sm sm:text-md text-black pb-1'>Border Width : is given by using the class 'rounded'</h3>
                  <div className="boxes hidden md:flex gap-14">
                    <div className="box border-4 rounded-lg border-black h-[150px] w-[150px] text-sm pt-10 font-bold text-center">rounded-lg</div>
                    <div className="box border-4 rounded-xl border-black h-[150px] w-[150px] text-sm pt-10 font-bold text-center">rounded-xl</div>
                    <div className="box border-4 rounded-full border-black h-[150px] w-[150px] text-sm pt-10 font-bold text-center">rounded-full</div>
                  </div>

                  <div className="boxes flex md:hidden gap-14">
                    <div className="flex flex-col items-center gap-2">
                      <div className="box border-4 rounded-lg border-black h-[70px] w-[70px]"></div>
                      <h3 className='text-xs pt-10 font-bold text-center'>rounded-lg</h3>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="box border-4 rounded-xl border-black h-[70px] w-[70px]"></div>
                      <h3 className='text-xs pt-10 font-bold text-center'>rounded-xl</h3>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="box border-4 rounded-full border-black h-[70px] w-[70px]"></div>
                      <h3 className='text-xs pt-10 font-bold text-center'>rounded-full</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-violet-400 w-full sm:w-[80%] mx-auto rounded-lg my-4 flex gap-5 items-center justify-center px-5 py-4 text-black font-bold'>
                <div className='flex flex-col items-center gap-6'>
                  <h3 className='font-bold text-sm sm:text-md text-black pb-1'>Border Style : is given by using the class: border - "what style you want"</h3>
                  <div className="boxes hidden md:flex gap-14">
                    <div className="box border-2 border-dashed border-black h-[150px] w-[150px] text-sm pt-10 font-bold text-center">border-dashed</div>
                    <div className="box border-4 border-dotted border-black h-[150px] w-[150px] text-sm pt-10 font-bold text-center">border-dotted</div>
                    <div className="box border border-none border-black h-[150px] w-[150px] text-sm pt-10 font-bold text-center">border-none</div>
                  </div>

                  <div className="boxes flex md:hidden gap-14">
                    <div className="flex flex-col items-center">
                      <div className="box border-2 border-dashed border-black h-[70px] w-[70px]"></div>
                      <h3 className='text-xs pt-10 font-bold text-center'>border-dashed</h3>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="box border-2 border-dotted border-black h-[70px] w-[70px]"></div>
                      <h3 className='text-xs pt-10 font-bold text-center'>border-dotted</h3>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="box border-2 border-none border-black h-[70px] w-[70px]"></div>
                      <h3 className='text-xs pt-10 font-bold text-center'>border-none</h3>
                    </div>
                  </div>
                </div>
              </div>
              <p className='text-violet-700 font-bold py-3'>Ring is also very similar to borders.</p>
            </div>

            <div className="border-color my-5">
              <h3 className='text-lg text-violet-500 font-bold'>Borders &rarr; Colors</h3>
              <p className='text-md my-2 text-violet-700'>We can change a border's colors as shown :</p>

              <div className='bg-violet-400 w-full sm:w-[80%] mx-auto rounded-lg my-4 flex gap-5 items-center justify-center px-5 py-4 text-black font-bold'>
                <div className='flex flex-col items-center gap-6'>
                  <h3 className='font-bold text-black pb-1'>Border Color : can be changed by just mentioning that color.</h3>
                  <div className="boxes hidden md:flex gap-14">
                    <div className="box border-4 rounded-lg border-blue-600 h-[150px] w-[150px] text-sm pt-10 font-bold text-center">Blue Border</div>
                    <div className="box border-4 rounded-lg border-red-600 h-[150px] w-[150px] text-sm pt-10 font-bold text-center">Red Border</div>
                    <div className="box border-4 rounded-lg border-yellow-400 h-[150px] w-[150px] text-sm pt-10 font-bold text-center">Yellow Border</div>
                  </div>

                  <div className="boxes flex md:hidden gap-14">
                    <div className="flex flex-col items-center">
                      <div className="box border-4 rounded-lg border-blue-600 h-[70px] w-[70px]"></div>
                      <h3 className='text-xs pt-10 font-bold text-center'>Blue Border</h3>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="box border-4 rounded-lg border-red-600 h-[70px] w-[70px]"></div>
                      <h3 className='text-xs pt-10 font-bold text-center'>Red Border</h3>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="box border-4 rounded-lg border-yellow-400 h-[70px] w-[70px]"></div>
                      <h3 className='text-xs pt-10 font-bold text-center'>Yellow Border</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="pagination flex justify-around items-center">
        <Link href="/Tutorials/Javascript" ><button className="text-md sm:text-lg lg:text-xl transition-all duration-200 ease-in hover:scale-90 text-violet-500 border-2 border-violet-400 px-4 py-1 font-bold rounded-lg cursor-pointer">Previous</button></Link>

        <Link href="/Tutorials/Reactjs" ><button className="text-md sm:text-lg lg:text-xl right-[70px] transition-all duration-200 ease-in hover:scale-90 text-violet-500 border-2 border-violet-400 px-4 py-1 font-bold rounded-lg cursor-pointer">Next</button></Link>
      </div>
    </>
  )
}

export default Tailwindpage
