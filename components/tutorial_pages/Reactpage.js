"use client"

import React, { useState } from 'react'
import { FaRegCircle } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Link from 'next/link';

const Reactpage = () => {
  const [left, setleft] = useState(false);

  const handleLeft = () => {
    setleft(!left)
  }

  return (
    <>
      <div className="react-container block lg:flex lg:gap-2">
        <div className="toggle-left block lg:hidden">
          {left ? <FaTimes onClick={handleLeft} className='pl-3 z-20 absolute text-violet-600 hover:text-violet-800 transition-all duration-200 ease-in cursor-pointer' style={{ fontSize: '23px' }} /> : <GiHamburgerMenu onClick={handleLeft} className='pl-3 text-violet-600 hover:text-violet-800 transition-all duration-200 ease-in cursor-pointer' style={{ fontSize: '23px' }} />}
        </div>

        <div className="left bg-violet-200 hidden lg:flex flex-col min-w-[23%] h-[80vh] overflow-y-scroll text-black py-7 px-8">
          <div className="intro my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>WELCOME TO REACT JS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Getting Started with React</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React ES6</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React + Vite App</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React JSX</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React Components</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React Class</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React States & Props</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React Events</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React Conditional</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React Rendering Lists</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Forms in React</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React Router</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React Memo</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Using Tailwind with React</li>
            </ul>
          </div>

          <div className="hooks my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>REACT HOOKS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> What's a Hook?</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> useState() Hook</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> useRef() Hook</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> useEffect() Hook</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> useContext API</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> useCallback() Hook</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> useMemo() Hook</li>
            </ul>
          </div>

          <div className="other my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>OTHER REACT LIBRARIES</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React Icons</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React Toastify</li>
            </ul>
          </div>
        </div>

        {left && <div className="left-2 bg-violet-200 lg:flex flex-col w-[95%] sm:w-1/2 lg:w-[23%] h-[100vh] z-10 absolute overflow-y-scroll text-black py-7 px-8">
          <div className="intro my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>WELCOME TO REACT JS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Getting Started with React</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React ES6</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React + Vite App</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React JSX</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React Components</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React Class</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React States & Props</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React Events</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React Conditional</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React Rendering Lists</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Forms in React</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React Router</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React Memo</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Using Tailwind with React</li>
            </ul>
          </div>

          <div className="hooks my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>REACT HOOKS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> What's a Hook?</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> useState() Hook</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> useRef() Hook</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> useEffect() Hook</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> useContext API</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> useCallback() Hook</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> useMemo() Hook</li>
            </ul>
          </div>

          <div className="other my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>OTHER REACT LIBRARIES</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React Icons</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> React Toastify</li>
            </ul>
          </div>
        </div>}

        <div className="right w-full lg:w-[75%] text-black z-0 py-5 px-3">
          <div className="intro mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Welcome to React JS</h1>
            <div className='my-10'>
              <p className='text-md my-2 text-violet-700'>ReactJS is a JavaScript library used to build User Interfaces(UI) & reusable client components. It significantly decreases the code with it's components, states i.e. hooks, etc. It is mainly used to build single page web-applications.</p>
            </div>

            <div className='my-5'>
              <h3 className='text-lg my-4 text-violet-500 font-bold'>Create your first React App</h3>
              <p className='text-md my-2 text-violet-700'>Open your terminal in the directory you would like to create your application. Run this command to create a React application.</p>
              <div className='bg-violet-400 w-[95%] sm:w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <span>{'npx create-react-app my-react-app'}</span>
                <p className='font-bold text-sm w-[90%] py-4'>OR, you can directly make your application without specifying a name, like this:</p>
                <span>{'npx create-react-app .'}</span>
              </div>
              <p className='text-md my-2 text-violet-700'>When choosing folder name, make sure there are no spaces or capital letters because of npm naming restrictions. </p>
              <p className='text-md my-2 text-violet-700'>Once base application is created, if folder specified you just have to enter the folder. You can use this command to enter:</p>
              <div className='bg-violet-400 w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <span>{'cd directory-name'}</span>
              </div>
              <p className='text-md my-2 text-violet-700'>Then just start up the application with this command:</p>
              <div className='bg-violet-400 w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <span>{'npm start'}</span>
              </div>
            </div>
          </div>

          <div className="es6 mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>React ES6</h1>
            <p className='text-md my-2 text-violet-700'>ES6 stands for ECMAScript 6. ECMAScript is a JavaScript standard intended to ensure a common language across different browsers. ES6 is the 6th version of ECMAScript.</p>

            <div className='my-5'>
              <h3 className='text-lg my-4 text-violet-500 font-bold'>Why ES6? Features & Advantages</h3>
              <p className='text-md my-2 text-violet-700'>React uses ES6 and all of these new features will make your coding experience in react much much better. You will be able to do things with much more ease and in very less lines!</p>

              <div className='bg-violet-400 w-full sm:w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h3 className='text-xl font-bold text-black'>Arrow Funtions </h3>
                <span>{'const hello = () => {'}</span>
                <span className='px-5'>{'return "Hello World!";'}</span>
                <span>{'}'}</span>
                <p className='font-bold text-sm px-10 py-2'> OR </p>
                <span>{'const hello = () => "Hello World!";'}</span>
              </div>

              <div className='bg-violet-400 w-full sm:w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h3 className='text-xl font-bold text-black'>.map() </h3>
                <span>{'const data = [title1, title2, title3]'}</span>
                <span >{'let cards = data.map((item) => <card>{item}</card>)'}</span>
              </div>
              <p className='text-md my-2 text-violet-700'>.map() can be used for alot of things, one of it's use case is, we can make any number of cards through loop and just put it in jsx.</p>

              <div className='bg-violet-400 w-full sm:w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h3 className='text-xl font-bold text-black'>Destructuring </h3>
                <h4 className='text-md text-black underline'>Old Way :</h4>
                <span>{'const languages = ["JS", "Python", "Java"];'}</span>
                <span>{'const js = languages[0]'}</span>
                <span>{'const python = languages[1]'}</span>
                <span>{'const java = languages[2]'}</span>

                <h4 className='text-md text-black underline pt-6'>New Way :</h4>
                <span>{'const languages = ["JS", "Python", "Java"];'}</span>
                <span>{'const [ js, python, java ] = languages'}</span>
              </div>

              <div className='bg-violet-400 w-full sm:w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h3 className='text-xl font-bold text-black'>Spread Operator </h3>
                <span>{'const languages = ["JS", "Python", "Java"];'}</span>
                <span>{'const moreLanguages = ["C", "C++", "C#"];'}</span>
                <span className='pt-2'>{'const allLanguages = [...languages, ...morelanguages]'}</span>

                <span className='pt-4 text-sm sm:text-md flex sm:justify-center gap-2'> <span className='font-bold'>Output :</span>{'["JS", "Python", "Java","C", "C++", "C#"];'}</span>
              </div>
            </div>
          </div> 

          <div className="jsx mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>JSX in React</h1>
            <p className='text-md my-2 text-violet-700'>JSX stands for JavaScript XML. It is similar in appearance to HTML, hence provides a way to easily write HTML in react. It's a combination of HTML + JS i.e; looks and feels like HTML document but we can write JS code in it within {'{ }'} brackets</p>

            <div className="my-5">
              <h3 className='text-lg my-4 text-violet-500 font-bold'>Expressions in JSX</h3>
              <p className='text-md my-2 text-violet-700'>You can write simple mathematical operations to variable to states to complicated operations with ternary operators and it will return the result.</p>

              <div className='bg-violet-400 w-full sm:w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h3 className='text-lg font-bold text-black'>Mathematical Operations </h3>
                <span className='flex gap-3 items-center'>{'const elem = <h1>React was released in {2010+3}</h1>'} <span className='opacity-50'>{'// React was released in 2013'}</span></span>

                <h3 className='text-lg font-bold text-black pt-4'>Variables / States </h3>
                <span>{'const name = "Bryan"'}</span>
                <span className='flex gap-3 items-center'>{'const elem = <h1>My name is {name}</h1>'} <span className='opacity-50'>{'// My name is Bryan'}</span></span>

                <h3 className='text-lg font-bold text-black pt-4'>Ternary Operators </h3>
                <span>{'const elem = <h1> Hello {name ? name : "World"} </h1>'}</span>
              </div>
            </div>
          </div>

          <div className="props mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Props in React</h1>
            <p className='text-md my-2 text-violet-700'>Props are arguments passed to React components via HTML attributes.</p>

            <div className='bg-violet-400 w-[95%] sm:w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
              <h3 className='text-lg font-bold text-black'>Component : </h3>
              <span>{'function Cat(props) {'}</span>
              <span className='px-7'>{' return <h1>Meow color is {props.color}</h1>;'}</span>
              <span>{'}'}</span>

              <h3 className='text-lg font-bold text-black pt-4'>Main file : </h3>
              <span>{'<Cat color="blue" />'}</span>
            </div>
            <p className='text-md sm:text-xl'>Output : Meow's color is blue.</p>
          </div>

          <div className="hooks mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Hooks in React</h1>
            <p className='text-md my-2 text-violet-700'>Hooks were added to React in version 16.8. Hooks let you use state and other React features without writing a class. States have largely replaced classes in React. You must import Hooks from react.</p>

            <span className='text-md my-2 text-violet-700'>The 3 mostly used Hooks in React are :</span>
            <ul className='flex flex-col mt-2 gap-2 text-violet-700'>
              <li className='font-bold'>&rarr;  useState() Hook</li>
              <li className='font-bold'>&rarr; useEffect() Hook</li>
              <li className='font-bold'>&rarr; useRef() Hook</li>
            </ul>

            <p className='text-md mb-4 mt-5 text-violet-700 font-bold px-5'>Let's understand each of them!</p>

            <div className="my-5">
              <h3 className='text-lg my-4 text-violet-500 font-bold'>useState Hook in React</h3>
              <p className='text-md my-2 text-violet-700'>useState is a Hook that lets you add React state to function components. To use useState, first we need to import useState and initialize it, you can import it from React.</p>

              <div className='bg-violet-400 w-[85%] sm:w-1/2 mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <span>{'import { useState } from "react";'}</span>
              </div>
              <h3 className='text-lg font-bold text-violet-700 py-2'>Usages of useState : </h3>

              <div className='bg-violet-400 w-full sm:w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h4 className='text-md font-bold text-black pb-2'>1. Reading a State  </h4>
                <span className='pb-2'>{'import { useState } from "react";'}</span>
                <span>{'const App = () => {'}</span>
                <span className='px-5'>{'const [name, setName] = useState("")'}</span>
                <span className='px-5'>{'return <h1>My name is {name}</h1>'}</span>
                <span>{'};'}</span>
              </div>

              <div className='bg-violet-400 w-full sm:w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h4 className='text-md font-bold text-black pt-4'>2. Updating a State  </h4>
                <span className='pb-2'>{'import { useState } from "react";'}</span>
                <span>{'const App = () => {'}</span>
                <span className='px-5'>{'const [name, setName] = useState("")'}</span>
                <span className='px-5'>{' setName("Bryan")'}</span>
                <span className='px-5 pt-3'>{'return <h1>My name is {name}</h1>'}</span>
                <span>{'};'}</span>
              </div>

              <div className='bg-violet-400 w-full sm:w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h4 className='text-md font-bold text-black pt-4'>3. Updating Arrays & Objects in State  </h4>
                <span className='pb-2'>{'import { useState } from "react";'}</span>
                <span>{'const App = () => {'}</span>
                <span className='px-5'>{'const [data, setData] = useState({'}</span>
                <span className='px-5'>{'name: "Bryan",'}</span>
                <span className='px-5'>{'age: 21'}</span>
                <span>{'})'}</span>
                <span className='pt-4 px-3'>{'return <>'}</span>
                <span className='px-5'>{'<h1>My name is {data.name} and my age is {data.age}</h1>'}</span>
                <span className='px-5'>{'<button onClick={() => setData({ ...data, name: "Bryan" })}> Click Me </button>'}</span>
                <span className='px-3'>{'</>'}</span>
                <span>{'};'}</span>
              </div>
            </div>

            <div className="my-5">
              <h3 className='text-lg my-4 text-violet-500 font-bold'>useEffect Hook in React</h3>
              <p className='text-md my-2 text-violet-700'>The useEffect Hook allows you to perform side effects in your components. The useEffect accepts two arguments. The second one is optional.</p>

              <h3 className='text-md my-2 text-violet-700 font-bold'>There are 3 types of useEffects :</h3>

              <div className='bg-violet-400 w-full sm:w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h4 className='text-md font-bold text-black pb-2'>1. Runs on every render  </h4>
                <span className='pb-2'>{'import { useState, useEffect } from "react";'}</span>
                <span>{'function Home() {'}</span>
                <span className='px-5'>{'const [count, setCount] = useState(0);'}</span>
                <span className='pt-5'>{'useEffect(() => {'}</span>
                <span className='px-6'>{'setTimeout(() => {'}</span>
                <span className='px-10'>{'setCount((count) => count + 1);'}</span>
                <span className='px-6'>{'}, 1000);'}</span>
                <span>{'});'}</span>
                <span className='pt-4 px-4'>{'return <h1>I have rendered {count} times!</h1>;'}</span>
                <span>{'}'}</span>
              </div>

              <div className='bg-violet-400 w-full sm:w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h4 className='text-md font-bold text-black pb-2'>2. Runs on first render  </h4>
                <span className='pb-2'>{'import { useState, useEffect } from "react";'}</span>
                <span>{'function Home() {'}</span>
                <span className='px-5'>{'const [count, setCount] = useState(0);'}</span>
                <span className='pt-5'>{'useEffect(() => {'}</span>
                <span className='px-6'>{'setTimeout(() => {'}</span>
                <span className='px-10'>{'setCount((count) => count + 1);'}</span>
                <span className='px-6'>{'}, 1000);'}</span>
                <span>{'}, []);'}</span>
                <span className='pt-4 px-4'>{'return <h1>I have rendered {count} times!</h1>;'}</span>
                <span>{'}'}</span>
              </div>

              <div className='bg-violet-400 w-full sm:w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h4 className='text-md font-bold text-black pb-2'>3. Runs when any value / state changes </h4>
                <span className='pb-2'>{'import { useState, useEffect } from "react";'}</span>
                <span>{'function Home() {'}</span>
                <span className='px-5'>{'const [count, setCount] = useState(0);'}</span>
                <span className='pt-5'>{'useEffect(() => {'}</span>
                <span className='px-6'>{'setCount((count) => count + 1);'}</span>
                <span className='px-6'>{'alert( `Count was changed to ${count}` )'}</span>
                <span>{'}, [count]);'}</span>
                <span className='pt-4 px-4'>{'return <h1>I have rendered {count} times!</h1>;'}</span>
                <span>{'}'}</span>
              </div>
            </div>

            <div className="my-5">
              <h3 className='text-lg my-4 text-violet-500 font-bold'>useRef Hook in React</h3>
              <p className='text-md my-2 text-violet-700'>useRef keeps the value stored between renders. In this, value changed doesn't cause a re-render. It can also be used to access a DOM element directly.</p>

              <h3 className='text-md my-2 text-violet-700 font-bold'>useRef is used for the following cases :</h3>

              <div className='bg-violet-400 w-full sm:w-[70%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h4 className='text-md font-bold text-black pb-2'>1. Doesn't cause Re-rendering </h4>
                <span className='pb-2'>{'import { useState, useRef } from "react";'}</span>
                <span>{'function App() {'}</span>
                <span className='px-5'>{'const [stateValue, setStateValue] = useState("");'}</span>
                <span className='px-5'>{'const refValue = useRef("");'}</span>
                <span className='pt-5 px-2'>{'return ('}</span>
                <span className='px-3'>{'<>'}</span>
                <span className='px-3'>{'<h1>Will change but wont cause a re-render:</h1>'}</span>
                <span className='px-5'>{'<button onClick={()=>{refValue.current=Math.random()}}>'}</span>
                <span className='px-5'>{'ref</button> : {refValue.current}'}</span>
                <span className='px-3'>{'</>'}</span>
                <span className='px-2'>{');'}</span>
                <span>{'}'}</span>
              </div>
              <p className='text-md my-2 text-violet-700 font-bold'>In this,  if you click on ref, nothing visible will happen, i.e. ref will change but it won't re-render. To verify this, you can again click on state, it will again update and re-render but this time ref has some value stored, so that will display. </p>

              <div className='bg-violet-400 w-full sm:w-[70%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h4 className='text-md font-bold text-black pb-2'>2. Accessing the DOM elements using Ref </h4>
                <span className='pb-2'>{'import { useRef, useEffect } from "react";'} </span>
                <span>{'function App() {'}</span>
                <span className='px-5'>{'const headerRef = useRef("");'}</span>
                <span className='pt-5'>{'useEffect(() => {'}</span>
                <span className='px-6'>{'headerRef.current.style.color= "red";'} </span>
                <span className='opacity-50'>{'// headerRef.current will help us target the <h1> element from the DOM and make it red'}</span>
                <span>{'}, []);'}</span>
                <span className='pt-5 px-2'>{'return ('}</span>
                <span className='px-3'>{'<>'}</span>
                <span className='px-5 sm:px-10'>{'<h1 ref={headerRef}>I am header, I will change to Red because of Ref</h1>'}</span>
                <span className='px-3'>{'</>'}</span>
                <span className='px-2'>{');'}</span>
                <span>{'}'}</span>
              </div>

              <p>Output : <span className='text-red-600 text-md sm:text-xl'>I am header, I will change to Red because of Ref</span></p>

              <p className='text-md my-2 text-violet-700 font-bold'>In this, we give a reference to a DOM element using .current and through useEffect we can accordingly make changes to that element across renders. </p>

            </div>
          </div>
        </div>
      </div>
      <div className="pagination flex justify-around items-center">
        <Link href="/Tutorials/Tailwind" ><button className="text-md sm:text-lg lg:text-xl transition-all duration-200 ease-in hover:scale-90 text-violet-500 border-2 border-violet-400 px-4 py-1 font-bold rounded-lg cursor-pointer">Previous</button></Link>

        <Link href="/Tutorials/Nextjs" ><button className="text-md sm:text-lg lg:text-xl right-[70px] transition-all duration-200 ease-in hover:scale-90 text-violet-500 border-2 border-violet-400 px-4 py-1 font-bold rounded-lg cursor-pointer">Next</button></Link>
      </div>
    </>
  )
}

export default Reactpage