"use client"

import { Typewriter } from 'react-simple-typewriter'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [index, setindex] = useState(0);

  const technologies = [
    {
      img: <FaHtml5 className='text-orange-500' />,
      name: 'Hyper Text Markup Language (HTML5)'
    },
    {
      img: <FaCss3Alt className='text-blue-500' />,
      name: 'Cascading Style Sheets (CSS)'
    },
    {
      img: <IoLogoJavascript className='text-yellow-400' />,
      name: 'JavaScript (JS)'
    },
    {
      img: <RiTailwindCssFill className='text-[#58c4dc]' />,
      name: 'Tailwind CSS (T-CSS)'
    },
    {
      img: <FaReact className='text-[#58c4dc]' />,
      name: 'React JS'
    },
    {
      img: <SiNextdotjs className='text-black' />,
      name: 'Next.js'
    },
  ]

  const handleLeft = () => {
    if (index > 0) {
      setindex(index - 1)
    }
  }

  const handleRight = () => {
    if (index < technologies.length - 1) {
      setindex(index + 1)
    }
  }

  return (
    <>
      <div className="intro lg:min-h-[75vh]">
        <div className="flex w-full sm:w-[90%] h-[450px] items-center bg-violet-300 mx-auto mt-8 md:mt-12 rounded-xl shadow-lg shadow-violet-500 custom-font">
          <div className="flex flex-col">
            <h1 className='text-black text-2xl md:text-4xl px-10 py-3'>Welcome to Frontend Hub!</h1>
            <h2 className='text-black text-lg md:text-2xl px-10 py-3 hidden sm:block'>This is a website about Frontend Web Development <br /> to <span className='text-violet-600 font-bold'>enhance</span> your skills and get your dream job.</h2>
            <h2 className='text-black text-lg md:text-2xl px-10 py-3 block sm:hidden'>This is a website about Frontend Web Development to <span className='text-violet-600 font-bold'>enhance</span> your skills and get your dream job.</h2>
            <h3 className='text-black text-xl px-10 py-3'>Learn
              <span className='text-violet-700 px-2' style={{ fontWeight: 'bold', fontSize: '20px' }}>
                <Typewriter
                  words={['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React JS', 'Next.js']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span></h3>
            <Link href="/Tutorials" target='_blank'> <button className='sm:w-[33%] w-1/2 mx-10 my-8 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Start Learning &rarr; </button> </Link>
          </div>
        </div>
      </div>

      <h2 className='text-2xl sm:text-4xl text-violet-700 font-bold text-center mt-20 mb-5'>What you will learn here..</h2>
      <div className='tech-container1 hidden sm:flex flex-col'>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex w-[90%] lg:w-[47%] min-h-[250px] text-violet-700 items-center justify-around mx-auto my-7 rounded-xl">
            <div>
              <FaHtml5 className='text-orange-500 hover:scale-110 transition-all duration-200' style={{ fontSize: '150px' }} />
            </div>

            <div className="info w-1/2 flex flex-col gap-2">
              <span className='font-bold pb-3'>Hyper Text Markup Language (HTML)</span>
              <span className='hidden sm:block'>HTML is the standard markup language for Web pages.
                With HTML you can create your own Website. HTML describes the structure of a Web page.</span></div>
          </div>

          <div className="flex w-[90%] lg:w-[47%] min-h-[350px] text-violet-700 items-center justify-around mx-auto my-7 rounded-xl">
            <div>
              <FaCss3Alt className='text-blue-500 hover:scale-110 transition-all duration-200' style={{ fontSize: '150px' }} />
            </div>

            <div className="info w-1/2 flex flex-col gap-2">
              <span className='font-bold pb-3'>Cascading Style Sheets (CSS)</span>
              <span className='hidden sm:block'>CSS is the language we use to style an HTML document.CSS describes how HTML elements are to be displayed on screen. It can control the layout of multiple web pages all at once.</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex w-[90%] lg:w-[47%] min-h-[250px] text-violet-700 items-center justify-around mx-auto my-7 rounded-xl">
            <div>
              <IoLogoJavascript className='text-yellow-400 hover:scale-110 transition-all duration-200' style={{ fontSize: '150px' }} />
            </div>

            <div className="info w-1/2 flex flex-col gap-2">
              <span className='font-bold pb-3'>JavaScript (JS)</span>
              <span className='hidden sm:block'>JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. It's easy to learn.JavaScript's dynamic capabilities include runtime object construction, variable parameter lists,etc.</span>
            </div>
          </div>

          <div className="flex w-[90%] lg:w-[47%] min-h-[250px] text-violet-700 items-center justify-around mx-auto my-7 rounded-xl">
            <div>
              <RiTailwindCssFill className='text-[#58c4dc] hover:scale-110 transition-all duration-200' style={{ fontSize: '150px' }} />
            </div>

            <div className="info w-1/2 flex flex-col gap-2">
              <span className='font-bold pb-3'>Tailwind CSS (T-CSS)</span>
              <span className='hidden sm:block'>Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file. It's fast, flexible, and reliable.</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex w-[90%] lg:w-[47%] min-h-[250px] text-violet-700 items-center justify-around mx-auto my-7 rounded-xl">
            <div>
              <FaReact className='text-[#58c4dc] hover:scale-110 transition-all duration-200' style={{ fontSize: '150px' }} />
            </div>

            <div className="info w-1/2 flex flex-col gap-2">
              <span className='font-bold pb-3'>React JS</span>
              <span className='hidden sm:block'>React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components. React is a JavaScript library created by Facebook.</span>
            </div>
          </div>

          <div className="flex w-[90%] lg:w-[47%] min-h-[250px] text-violet-700 items-center justify-around mx-auto my-7 rounded-xl">
            <div>
              <SiNextdotjs className='text-black hover:scale-110 transition-all duration-200' style={{ fontSize: '150px' }} />
            </div>

            <div className="info w-1/2 flex flex-col gap-2">
              <span className='font-bold pb-3'>NEXT.js</span>
              <span className='hidden sm:block'>Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.</span>
            </div>
          </div>

        </div>
        <p className='bg-violet-400 rounded-xl px-6 py-5 text-violet-950 text-md lg:text-xl w-[80%] lg:w-[45%] mx-auto my-12'>There are several other tech stack options such as Angular JS , Vue JS , Sass , and so on. But I prefer these technologies personally and I am focussing on these only. </p>
      </div >

      {/* Responsive container  */}
      <div className='tech-container2 sm:hidden flex flex-col'>
        <div className="flex-flex-col items-center justify-center">
          {technologies.slice(index, index + 1).map((t) => (
            <div key={t.name} className="card relative flex flex-col items-center gap-5 w-[85%] h-[250px] mx-auto px-5 py-8 rounded-lg my-5 text-violet-700">
              <div className='hover:scale-110 transition-all duration-200' style={{ fontSize: '150px' }}>{t.img}</div>
              <span className='absolute flex flex-col pt-8 items-center gap-5 bottom-0 font-bold'>{t.name} <Link href="/Tutorials" className='text-xs cursor-pointer hover:underline'>Learn more</Link> </span>
            </div>
          )
          )}
        </div>

        <div className="arrows flex items-center justify-center gap-4">
          <IoMdArrowDropleftCircle onClick={handleLeft} className='text-violet-500 cursor-pointer' style={{ fontSize: '30px' }} />
          <IoMdArrowDroprightCircle onClick={handleRight} className='text-violet-500 cursor-pointer' style={{ fontSize: '30px' }} />
        </div>

        <p className='bg-violet-400 rounded-xl px-6 py-5 text-violet-950 text-md lg:text-xl w-[90%] mx-auto my-12'>There are several other tech stack options such as Angular JS , Vue JS , Sass , and so on. But I prefer these technologies personally and I am focussing on these only. </p>
      </div >
    </>
  );
}
