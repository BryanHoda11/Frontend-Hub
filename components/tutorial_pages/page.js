"use client"
import React, { useState } from 'react'
import { FaRegCircle } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Link from "next/link"

const htmlpage = () => {
  const [left, setleft] = useState(false);

  const handleLeft = () => {
    setleft(!left)
  }

  return (
    <>
      <div className="html-container block lg:flex lg:gap-2">
        <div className="toggle-left block lg:hidden">
          {left ? <FaTimes onClick={handleLeft} className='pl-3 z-20 absolute text-violet-600 hover:text-violet-800 transition-all duration-200 ease-in cursor-pointer' style={{ fontSize: '23px' }} /> : <GiHamburgerMenu onClick={handleLeft} className='pl-3 text-violet-600 hover:text-violet-800 transition-all duration-200 ease-in cursor-pointer' style={{ fontSize: '23px' }} />}
        </div>

        <div className="left bg-violet-200 hidden lg:flex flex-col w-1/2 lg:w-[23%] h-[80vh] overflow-y-scroll text-black py-7 px-8">

          <div className="intro my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>INTRODUCTION</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Introduction to HTML</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> HTML Structure</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> HTML Tags</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> HTML Attributes</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> HTML IDs & Classes</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> HTML Comments</li>
            </ul>
          </div>

          <div className="tags my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>HTML TAGS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Skeletal Tags</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Heading Tags</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Paragraphy Tag</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Horizontal Line Tag</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Line Breaking Tag</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Anchor Tag</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Image Tag</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Pre Tag</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Semantic Tags</li>
            </ul>
          </div>

          <div className="elements my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>INLINE & BLOCK</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Inline Elements</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Block Elements</li>
            </ul>
          </div>

          <div className="lists my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>HTML LISTS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> HTML Lists</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Ordered Lists</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Unordered Lists</li>
            </ul>
          </div>

          <div className="forms my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>HTML FORMS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Intro to HTML Forms</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Input Types</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Textarea & Select</li>
            </ul>
          </div>

          <div className="media my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>HTML MEDIA TAGS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Video & Audio Tags</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> SVG in HTML</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> iFrames in HTML</li>
            </ul>
          </div>

        </div>

        {left && <div className="left-2 bg-violet-200 lg:flex flex-col w-[95%] sm:w-1/2 lg:w-[23%] h-[100vh] z-10 absolute overflow-y-scroll text-black py-7 px-8">

          <div className="intro my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>INTRODUCTION</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Introduction to HTML</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> HTML Structure</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> HTML Tags</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> HTML Attributes</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> HTML IDs & Classes</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> HTML Comments</li>
            </ul>
          </div>

          <div className="tags my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>HTML TAGS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Skeletal Tags</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Heading Tags</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Paragraphy Tag</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Horizontal Line Tag</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Line Breaking Tag</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Anchor Tag</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Image Tag</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Pre Tag</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Semantic Tags</li>
            </ul>
          </div>

          <div className="elements my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>INLINE & BLOCK</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Inline Elements</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Block Elements</li>
            </ul>
          </div>

          <div className="lists my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>HTML LISTS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> HTML Lists</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Ordered Lists</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Unordered Lists</li>
            </ul>
          </div>

          <div className="forms my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>HTML FORMS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Intro to HTML Forms</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Input Types</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Textarea & Select</li>
            </ul>
          </div>

          <div className="media my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>HTML MEDIA TAGS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Video & Audio Tags</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> SVG in HTML</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> iFrames in HTML</li>
            </ul>
          </div>

        </div>}

        <div className="right w-full lg:w-[75%] z-0 text-black py-5 px-3">
          <div className="intro mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Introduction to HTML</h1>
            <div className='my-10'>
              <h3 className='text-lg my-4 text-violet-500 font-bold'> What is HTML? </h3>
              <p className='text-md my-2 text-violet-700'>HTML (HyperText Markup Language) was created by Tim Berners-Lee in 1991 as a standard for creating web pages. It's a markup language used to structure content on the web, defining elements like headings, paragraphs, links, and images. HTML forms the backbone of web content. In layman's terms, HTML is like the skeleton of a website. It's a set of instructions that tells a web browser how to display text, images, videos, and other elements on a webpage.</p>
            </div>

            <div className='my-10'>
              <h3 className='text-lg my-4 text-violet-500 font-bold'>Why the Term HyperText & Markup Language ?</h3>
              <p className='text-md my-2 text-violet-700'>The term 'Hypertext Markup Language' is composed of two main words: 'hypertext' and 'markup language.' 'Hypertext' refers to the linking of text with other documents, while 'markup language' denotes a language that utilizes a specific set of tags. Tags are meaningful texts enclosed in angle braces, like {'<...>'}. For example, the {'<head>'} tag. Each tag has a unique meaning and significance in building an HTML page, and it can influence the web page in various ways.</p>
            </div>

            <div className='my-10'>
              <h3 className='text-lg my-4 text-violet-500 font-bold'>A clear understanding of what is HTML, CSS, and JavaScript :</h3>
              <img src="/carexample.png" alt='car-example' className='w-full sm:w-[90%] lg:w-[85%] min-h-[240px] my-5' />
              <p className='text-md my-2 text-violet-700'>In building a webpage, think of HTML, CSS, and JavaScript as different parts of a car. HTML is like the car's skeleton, forming the basic structure and frame. CSS adds the paint and finishing touches, making the car look appealing with color, style, and design. JavaScript is similar to the engine and mechanical parts, infusing the car with functionality, movement, and interactive features.</p>
            </div>

          </div>

          <div className="structure mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Structure of a HTML Page</h1>
            <p className='text-md my-2 text-violet-700'>An HTML document is structured using a set of nested tags. Each tag is enclosed within {'<…>'} angle brackets and acts as a container for content or other HTML tags. Let's take a look at a basic HTML document structure:</p>

            <div className='bg-violet-400 w-[95%] sm:w-[65%] mx-auto rounded-lg my-4 flex flex-col px-5 py-4 gap-2 text-black font-bold'>
              <span>{'<!DOCKTYPE HTML>'}</span>
              <span>{'<head>'}</span>
              <span className='px-12'>{'<title> Document </title>'}</span>
              <span>{'</head>'}</span>
              <span>{'<body>'}</span>
              <span className='px-12 opacity-50'>{'<-- content -->'}</span>
              <span>{'</body>'}</span>
              <span>{'</html>'}</span>
            </div>
          </div>

          <div className="class-id mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>IDs & Classes in HTML</h1>
            <p className='text-md my-2 text-violet-700'>HTML offers multiple ways to select and style elements. Two of the most commonly used selectors are IDs and Classes. </p>

            <div className='my-10'>
              <h3 className='text-lg my-4 text-violet-500 font-bold'> What is an ID? </h3>
              <p className='text-md my-2 text-violet-700'>An ID is an attribute, a unique identifier assigned to only one HTML element within a page. It is often used for unique styling and JavaScript manipulations.</p>

              <div className='bg-violet-400 w-[95%] lg:w-1/2 text-xs sm:text-sm lg:text-md mx-auto rounded-lg my-4 flex justify-center px-5 py-4 gap-2 text-black font-bold'>
                <span>{'<div id="myUniqueID"> This is a div with an ID. </div>'}</span>
              </div>
            </div>

            <div className='my-10'>
              <h3 className='text-lg my-4 text-violet-500 font-bold'> What are Classes? </h3>
              <p className='text-md my-2 text-violet-700'>The class attribute lets you give the same name to multiple HTML elements. That way, you can easily change their look or behavior all at once. Classes are not unique and can be assigned to multiple elements. They are generally used for applying the same styles or behaviors to a group of elements.</p>

              <div className='bg-violet-400 w-[95%] lg:w-[65%] text-xs sm:text-sm lg:text-md mx-auto rounded-lg my-4 flex flex-col items-center justify-center px-5 py-4 gap-1 text-black font-bold'>
                <span>{'<div class="myClass">This is a div with a class.</div>'}</span>
                <span>{'<p class="myClass">This is a paragraph with the same class.</p>'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination flex justify-around items-center">
        <Link href="/Tutorials" ><button className="text-md sm:text-lg lg:text-xl transition-all duration-200 ease-in hover:scale-90 text-violet-500 border-2 border-violet-400 px-4 py-1 font-bold rounded-lg cursor-pointer">Previous</button></Link>

        <Link href="/Tutorials/CSS" ><button className="text-md sm:text-lg lg:text-xl right-[70px] transition-all duration-200 ease-in hover:scale-90 text-violet-500 border-2 border-violet-400 px-4 py-1 font-bold rounded-lg cursor-pointer">Next</button></Link>
      </div>
    </>
  )
}

export default htmlpage
