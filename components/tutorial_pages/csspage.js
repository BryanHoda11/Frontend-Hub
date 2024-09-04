"use client"
import React, { useState } from 'react'
import { FaRegCircle } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Link from "next/link"

const csspage = () => {
  const [left, setleft] = useState(false);

  const handleLeft = () => {
    setleft(!left)
  }

  return (
    <>
      <div className="css-container block lg:flex lg:gap-2">
        <div className="toggle-left block lg:hidden">
          {left ? <FaTimes onClick={handleLeft} className='pl-3 z-20 absolute text-violet-600 hover:text-violet-800 transition-all duration-200 ease-in cursor-pointer' style={{ fontSize: '23px' }} /> : <GiHamburgerMenu onClick={handleLeft} className='pl-3 text-violet-600 hover:text-violet-800 transition-all duration-200 ease-in cursor-pointer' style={{ fontSize: '23px' }} />}
        </div>

        <div className="left bg-violet-200 hidden lg:flex flex-col w-[23%] h-[80vh] overflow-y-scroll text-black py-7 px-8">

          <div className="intro my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>INTRODUCTION</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> How CSS works?</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Syntax</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Ways to add CSS</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Selectors</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Specificity</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Your first CSS website</li>
            </ul>
          </div>

          <div className="properties my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>CSS PROPERTIES</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Colors</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Backgrounds</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Borders</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Images</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Fonts</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Text Styling</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Box Model</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Padding</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Margin</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Hover</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Cursors</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> List styles</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Pseudo Classes</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Buttons</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Overflow</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Maths Functions</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Z-Index</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Positions</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Size</li>
            </ul>
          </div>

          <div className="designing my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>CSS DESIGNING</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Display</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> FlexBox</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Grid</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Media Queries</li>
            </ul>
          </div>

          <div className="adavnce my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>CSS ADVANCE TOPICS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS 2D Transform</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Transitions</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Gradients</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Inherit</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Animations</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Shadows</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Pagination</li>
            </ul>
          </div>

        </div>

        {left && <div className="left-2 bg-violet-200 lg:flex flex-col w-[95%] sm:w-1/2 lg:w-[23%] h-[100vh] z-10 absolute overflow-y-scroll text-black py-7 px-8">

          <div className="intro my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>INTRODUCTION</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> How CSS works?</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Syntax</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Ways to add CSS</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Selectors</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Specificity</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Your first CSS website</li>
            </ul>
          </div>

          <div className="properties my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>CSS PROPERTIES</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Colors</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Backgrounds</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Borders</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Images</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Fonts</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Text Styling</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Box Model</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Padding</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Margin</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Hover</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Cursors</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> List styles</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Pseudo Classes</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Buttons</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Overflow</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Maths Functions</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Z-Index</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Positions</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Size</li>
            </ul>
          </div>

          <div className="designing my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>CSS DESIGNING</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Display</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> FlexBox</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Grid</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Media Queries</li>
            </ul>
          </div>

          <div className="adavnce my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>CSS ADVANCE TOPICS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS 2D Transform</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Transitions</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Gradients</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Inherit</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Animations</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Shadows</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> CSS Pagination</li>
            </ul>
          </div>

        </div>}

        <div className="right w-full lg:w-[75%] z-0 text-black py-5 px-3">
          <div className="intro mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Introduction to CSS</h1>
            <div className='my-10'>
              <h3 className='text-lg my-4 text-violet-500 font-bold'> What is CSS? </h3>
              <p className='text-md my-2 text-violet-700'>CSS stands for Cascading Style Sheets. It is a stylesheet language that is used to describe the visual presentation of a web page written in HTML (Hypertext Markup Language). HTML creates the structure of the page, while CSS adds styling to that structure.</p>
            </div>

            <div className='my-10'>
              <h3 className='text-lg my-4 text-violet-500 font-bold'>How CSS works ?</h3>
              <p className='text-md my-2 text-violet-700'>Let’s look at how CSS works on the DOM model.</p>
              <div className='text-md my-2 pb-4 text-violet-700'>The following steps will help us understand more about CSS working :</div>

              <ol className='text-lg gap-2 flex flex-col text-violet-700'>
                <li>1. The user types the URL and clicks enter.</li>
                <li>2. The browser makes a fetch request to the server.</li>
                <li>3. HTML is fetched from the server.</li>
                <li>4. HTML is converted into a DOM. In the DOM, each tag is considered a node.</li>
                <li>5. The browser fetches all the related files and assets that are linked to that HTML, such as external CSS, fonts, images, etc.</li>
                <li>6. The browser then parses the CSS and groups it based on the selectors, which can be tags.</li>
                <li>7. Each CSS is attached to its respective node. In this phase, CSS gets attached to its respective node. This is called a render tree.</li>
                <li>8. The render tree is the well-structured, well-arranged DOM node that will appear on the screen.</li>
                <li>9. The well-structured, custom-designed website is presented on the screen. This is called painting.</li>
              </ol>
            </div>

            <div className='my-10'>
              <h3 className='text-lg my-4 text-violet-500 font-bold'>A clear understanding of what is HTML, CSS, and JavaScript :</h3>
              <img src="/carexample.png" alt='car-example' className='w-full sm:w-[90%] lg:w-[85%] min-h-[240px] my-5' />
              <p className='text-md my-2 text-violet-700'>In building a webpage, think of HTML, CSS, and JavaScript as different parts of a car. HTML is like the car's skeleton, forming the basic structure and frame. CSS adds the paint and finishing touches, making the car look appealing with color, style, and design. JavaScript is similar to the engine and mechanical parts, infusing the car with functionality, movement, and interactive features.</p>
            </div>

          </div>

          <div className='my-10'>
            <h3 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Syntax of CSS</h3>
            <div className='bg-violet-400 w-[90%] md:w-1/2 mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
              <span>{'selector {'}</span>
              <span className='px-10'>{'property: value;'}</span>
              <span>{'}'}</span>
            </div>
            <div className='bg-violet-400 w-[95%] md:w-[65%] lg:w-1/2 mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
              <span>{'h2{'}</span>
              <span className='px-10'>{'color: blue;'}</span>
              <span>{'}'}</span>

              <p className='text-black font-bold'>In the example:
                h2: is the selector.
                color: It's the property.
                blue: The property value.</p>
            </div>
          </div>

          <div className='my-10'>
            <h3 className='text-xl sm:text-2xl text-violet-500 underline font-bold pb-4'>Ways to add CSS</h3>
            <span className='my-2 text-violet-700'>There are three different ways to add CSS to an HTML page, which are:</span>

            <ul className='flex flex-col gap-2 mt-3'>
              <li className='text-violet-800 font-bold text-sm'>Inline CSS</li>
              <li className='text-violet-800 font-bold text-sm'>Internal CSS</li>
              <li className='text-violet-800 font-bold text-sm'>External CSS (Recommended)</li>
            </ul>

            <div className='my-5'>
              <h3 className='text-lg my-4 text-violet-500 font-bold'>Inline CSS</h3>
              <p className='text-md my-2 text-violet-700'>Inline CSS is used to add custom properties to specific elements. The added style will only reflect on that particular element only. To use inline CSS, Insert the "style" attribute within the HTML element's opening tag.</p>
              <div className='bg-violet-400 w-[97%] sm:w-[90%] md:w-1/2 mx-auto rounded-lg my-4 flex justify-center px-5 py-4 gap-2 text-black font-bold'>
                <span>{'<h2 style="color: purple;">I am Bryan</h2>'}</span>
              </div>

              <p>Output : <span className='text-purple-600 text-md sm:text-xl'>I am Bryan</span></p>
            </div>

            <div className='my-5'>
              <h3 className='text-lg my-4 text-violet-500 font-bold'>Internal CSS</h3>
              <p className='text-md my-2 text-violet-700'>Internal CSS is used to apply custom style to the multiple elements on the same page. The style can be used throughout the HTML page. <br /> Internal CSS is defined in a style block, which will be inside the head section.</p>
              <div className='bg-violet-400 w-[95%] sm:w-[70%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <span>{'<!DOCKTYPE html>'}</span>
                <span>{'<head>'}</span>
                <span className='px-4'>{'<style>'}</span>
                <span className='px-10'>{'p {'}</span>
                <span className='px-14'>{'color: red;'}</span>
                <span className='px-10'>{'}'}</span>
                <span className='px-4'>{'</style>'}</span>
                <span>{'<head>'}</span>

                <span className='pt-4'>{'<body>'}</span>
                <span className='px-7'>{'<p>I am Bryan, from Mumbai </p>'}</span>
                <span>{'</body>'}</span>
                <span className='pt-6'>{'</html>'}</span>
              </div>

              <p>Output : <span className='text-red-600 text-md sm:text-xl'>I am Bryan, from Mumbai </span></p>
            </div>

            <div className='my-5'>
              <h3 className='text-lg my-4 text-violet-500 font-bold'>External CSS (Recommended)</h3>
              <p className='text-md my-2 text-violet-700'>External CSS works similarly to internal CSS but with a twist. Instead of adding the styles within the HTML file, we create a separate file with .css extension. This file will hold all the styling details. Then, we link this file to the HTML page, giving it the instructions on how to look.</p>

              <p className='text-md md:text-lg my-2 text-violet-700 font-bold'>href="style.css" : The href attribute stands for "hypertext reference." It specifies the path or URL to the external resource we want to link. In this case, it's the path to the external CSS file called "style.css".</p>
              <div className='bg-violet-400 w-[95%] sm:w-[70%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <span>{'<!DOCKTYPE html>'}</span>
                <span>{'<head>'}</span>
                <span className='px-6'>{'<title>CSS Intro</title>'}</span>
                <span className='px-6'>{'<link rel="stylesheet" href="style.css">'}</span>
                <span>{'<head>'}</span>
                <span className='pt-4'>{'<body>'}</span>
                <span className='px-10'>{'<p>I am Bryan, from Mumbai </p>'}</span>
                <span className='px-10'>{'<p> Nice meeting you! </p>'}</span>
                <span>{'</body>'}</span>
              </div>

              <div className='bg-violet-400 relative w-[70%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h4 className='absolute text-black text-sm top-[6px] right-[12px]'>In the style.css file :</h4>
                <span>{'p {'}</span>
                <span className='px-6'>{'color: red;'}</span>
                <span>{'}'}</span>
              </div>

              <p>Output : <br /> <span className='text-red-600 text-md sm:text-xl'>I am Bryan, from Mumbai </span> ; </p>
              <p><span className='text-red-600 text-md sm:text-xl'> Nice meeting you! </span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination flex justify-around items-center">
        <Link href="/Tutorials/HTML" ><button className="text-md sm:text-lg lg:text-xl transition-all duration-200 ease-in hover:scale-90 text-violet-500 border-2 border-violet-400 px-4 py-1 font-bold rounded-lg cursor-pointer">Previous</button></Link>

        <Link href="/Tutorials/Javascript" ><button className="text-md sm:text-lg lg:text-xl right-[70px] transition-all duration-200 ease-in hover:scale-90 text-violet-500 border-2 border-violet-400 px-4 py-1 font-bold rounded-lg cursor-pointer">Next</button></Link>
      </div>

    </>
  )
}

export default csspage
