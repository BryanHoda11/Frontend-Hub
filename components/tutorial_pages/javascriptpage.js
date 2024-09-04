"use client"

import React, { useState } from 'react'
import { FaRegCircle } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Link from 'next/link';

const javascriptpage = () => {
  const [left, setleft] = useState(false);

  const handleLeft = () => {
    setleft(!left)
  }

  return (
    <>
      <div className="js-container block lg:flex lg:gap-2">
        <div className="toggle-left block lg:hidden">
          {left ? <FaTimes onClick={handleLeft} className='pl-3 z-20 absolute text-violet-600 hover:text-violet-800 transition-all duration-200 ease-in cursor-pointer' style={{ fontSize: '23px' }} /> : <GiHamburgerMenu onClick={handleLeft} className='pl-3 text-violet-600 hover:text-violet-800 transition-all duration-200 ease-in cursor-pointer' style={{ fontSize: '23px' }} />}
        </div>

        <div className="left bg-violet-200 hidden lg:flex flex-col w-[23%] h-[80vh] overflow-y-scroll text-black py-7 px-8">
          <div className="intro my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>INTRODUCTION</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Introduction to JS</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> JS Execution</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Installing Node.js</li>
            </ul>
          </div>

          <div className="variables my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>JS VARIABLES</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> What are Variables?</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Variable Rules</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Primitives & Objects</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Operators & Expressions</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> var, let & const</li>
            </ul>
          </div>

          <div className="designing my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>BASICS OF JS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Functions</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> If-Else Conditionals</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> If-Else Ladder</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Switch Case</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Ternery Operator</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> For Loop</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> While Loop</li>
            </ul>
          </div>

          <div className="objects my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>JAVASCRIPT OBJECTS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Strings</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Arrays & Array Methods</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Loops with Arrays</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Map, Filter & Reduce</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Date</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Math</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Boolean</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Number</li>
            </ul>
          </div>

          <div className="dom-bom my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>DOM & BOM</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Document Object</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> getElementbyId</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> getElementsbyClassName</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> getElementsbyName</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> getElementsbyTagName</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> innerHTML</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> outerHTML</li>
            </ul>
          </div>

        </div>

        {left && <div className="left-2 bg-violet-200 lg:flex flex-col w-[95%] sm:w-1/2 lg:w-[23%] h-[100vh] z-10 absolute overflow-y-scroll text-black py-7 px-8">
          <div className="intro my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>INTRODUCTION</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Introduction to JS</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> JS Execution</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Installing Node.js</li>
            </ul>
          </div>

          <div className="variables my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>JS VARIABLES</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> What are Variables?</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Variable Rules</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Primitives & Objects</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Operators & Expressions</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> var, let & const</li>
            </ul>
          </div>

          <div className="designing my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>BASICS OF JS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Functions</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> If-Else Conditionals</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> If-Else Ladder</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Switch Case</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Ternery Operator</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> For Loop</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> While Loop</li>
            </ul>
          </div>

          <div className="objects my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>JAVASCRIPT OBJECTS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Strings</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Arrays & Array Methods</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Loops with Arrays</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Map, Filter & Reduce</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Date</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Math</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Boolean</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Number</li>
            </ul>
          </div>

          <div className="dom-bom my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>DOM & BOM</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Document Object</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> getElementbyId</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> getElementsbyClassName</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> getElementsbyName</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> getElementsbyTagName</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> innerHTML</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> outerHTML</li>
            </ul>
          </div>

        </div>}

        <div className="right w-full lg:w-[75%] z-0 text-black py-5 px-3 mb-6">
          <div className="intro mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Introduction to JavaScript</h1>
            <div className='my-10'>
              <p className='text-md my-2 text-violet-700'>Imagine a website as a house. HTML is like the bricks and walls that give it structure. CSS is like the paint and decorations that make it look nice. But without JavaScript, the house won't have any lights or running water—nothing would work or move. JavaScript is what makes a website interactive. It's like adding electricity to the house. It lets you click buttons to open doors, turn on lights, or even play music. So, without JavaScript, a website would be like a house where nothing really happens.</p>

              <p className='text-md my-2 text-violet-700'>JavaScript is used for frontend programming but it is also used for backend programming using <span className='font-bold'>Node.js</span></p>
            </div>

            <div className='my-10'>
              <h3 className='text-lg my-4 text-violet-500 font-bold'>A clear understanding of what is HTML, CSS, and JavaScript :</h3>
              <img src="/carexample.png" alt='car-example' className='w-full sm:w-[90%] lg:w-[85%] h-[240px] my-5' />
              <p className='text-md my-2 text-violet-700'>In building a webpage, think of HTML, CSS, and JavaScript as different parts of a car. HTML is like the car's skeleton, forming the basic structure and frame. CSS adds the paint and finishing touches, making the car look appealing with color, style, and design. JavaScript is similar to the engine and mechanical parts, infusing the car with functionality, movement, and interactive features.</p>
            </div>
          </div>

          <div className="mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>How to Execute JavaScript ?</h1>
            <p className='text-md my-2 text-violet-700'>JavaScript can be executed right inside one’s browser. You can open the JS console and start writing JS there. Another way to execute JS is a runtime like Node.js which can be installed and used to run JavaScript code. Yet another way to execute JavaScript is by inserting it inside the {'<script>'} tag of an HTML document.</p>
          </div>

          <div className="mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>What are Variables ?</h1>
            <p className='text-md my-2 text-violet-700'>In JavaScript, variables are used to store data. They are an essential part of any programming language, as they allow you to store, retrieve, and manipulate data in your programs. There are a few different ways to declare variables in JavaScript, each with its own syntax and rules.</p>

            <div className="my-5">
              <h3 className='text-lg my-4 text-violet-500 font-bold'>Declaring Variables</h3>
              <p className='text-md my-2 text-violet-700 font-bold'>To declare a variable in JavaScript, you use the "var" keyword followed by the name of the variable. For example:</p>

              <div className='bg-violet-400 w-[80%] sm:w-1/2 mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <span>{'var x;'}</span>
                <span>{'var x = 10;'}</span>
              </div>

              <p className='text-md my-2 text-violet-700 font-bold'>In JavaScript, you can also use the "let" and "const" keywords to declare variables. The "let" keyword is used to declare a variable that can be reassigned later, while the "const" keyword is used to declare a variable that cannot be reassigned. For example:</p>

              <div className='bg-violet-400 w-[80%] sm:w-1/2 mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <span>{'let y = 20;'}</span>
                <span>{'const z = 30;'}</span>
              </div>
            </div>
          </div>

          <div className="expressions mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Operators & Expressions</h1>
            <p className='text-md my-2 text-violet-700'>Operators in JavaScript are symbols that perform specific operations on one or more operands (values or variables).There are several types of operators in JavaScript, including:
              <ol className='flex flex-col mt-3'>
                <li>1. Arithmetic operators (e.g. +, -, *, /, %)</li>
                <li>2. Comparison operators {'(e.g. >, <, >=, <=, ==, ===, !=)'}</li>
                <li>3. Logical operators (e.g. &&, ||, !)</li>
                <li>4. Assignment operators (e.g. =, +=, -=, *=, /=)</li>
                <li>5. Conditional (ternary) operator (e.g. ?, :, &&)</li>
              </ol>
            </p>

            <div className='bg-violet-400 w-[80%] sm:w-1/2 mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
              <span>{'let x = 4;'}</span>
              <span>{'let y = 2;'}</span>
              <span className='pt-4 flex gap-3'>{'let z = x + y; '} <span className='opacity-50'>{'// z = 6'}</span></span>
              <span className='flex gap-3'>{'let z = x - y;'} <span className='opacity-50'>{'// z = 2'}</span></span>
              <span className='flex gap-3'>{'let z = x * y;'} <span className='opacity-50'>{'// z = 8'}</span></span>
              <span className='flex gap-3'>{'let z = x / y;'} <span className='opacity-50'>{'// z = 2'}</span></span>
            </div>
          </div>

          <div className="functions mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Functions in JS</h1>
            <p className='text-md my-2 text-violet-700'>JavaScript functions are blocks of code that can be defined and executed whenever needed. They are a crucial part of JavaScript programming and are used to perform specific tasks or actions. They can be assigned to variables, passed as arguments to other functions, and returned as values from functions.</p>

            <div className='bg-violet-400 w-[95%] sm:w-1/2 mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
              <h3 className='font-bold'>Syntax of a Function</h3>
              <span>{'function functionName(parameters) {'}</span>
              <span className='px-8 opacity-50'>{'// code to be executed'}</span>
              <span>{'}'}</span>
            </div>

            <div className='bg-violet-400 w-[95%] sm:w-1/2 mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
              <h3 className='font-bold'>Example of a Function :</h3>
              <span>{'function square(x) {'}</span>
              <span className='px-8'>{'return x * x;'}</span>
              <span>{'}'}</span>
              <span className='flex gap-3'>{'let result = square(5); '} <span className='opacity-50'>{'// returns 25'}</span></span>
            </div>

            <div className="my-5">
              <h3 className='text-lg my-4 text-violet-500 font-bold'>Arrow Functions</h3>
              <p className='text-md my-2 text-violet-700'>JavaScript also has a special type of function called an "arrow function," which uses a shorter syntax. Arrow functions are often used when you want to create a small, one-line function that doesn't require a separate function keyword. Here's the same square a function defined using an arrow function:</p>

              <div className='bg-violet-400 w-[95%] sm:w-1/2 mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <span>{'const square = (x) => {'}</span>
                <span className='px-8'>{'return x * x;'}</span>
                <span>{'}'}</span>
                <span className='flex gap-3'>{'let result = square(5); '} <span className='opacity-50'>{'// returns 25'}</span></span>
              </div>
            </div>
          </div>

          <div className="if-else mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>If-Else Conditionals</h1>
            <p className='text-md my-2 text-violet-700'>The "if" statement in JavaScript is used to execute a block of code if a certain condition is met. The "else" clause is used to execute a block of code if the condition is not met.</p>

            <div className='bg-violet-400 w-[85%] sm:w-[60%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
              <span>{'if (condition) {'}</span>
              <span className='px-8 opacity-50'>{'// code to be executed if condition is true'}</span>
              <span>{'} else {'}</span>
              <span className='px-8 opacity-50'>{'// code to be executed if condition is false '}</span>
              <span>{'}'}</span>
            </div>
          </div>

          <div className="switch-case mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Switch Case</h1>
            <p className='text-md my-2 text-violet-700'>The "switch" statement in JavaScript is another control structure that allows you to execute a different block of code depending on a specific value. It is often used as an alternative to the "if-else ladder" when you have multiple conditions to check against a single value.</p>

            <div className='bg-violet-400 w-[95%] md:w-[80%] lg:w-[60%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
              <h3 className='font-bold pb-3'>Syntax of a Switch Case</h3>
              <span>{'switch (expression) {'}</span>
              <span className='flex gap-2'>{' case'} <span className='text-violet-900'>{'value1 :'}</span></span>
              <span className='px-8 opacity-50'>{'// code to be executed if expression == value1'}</span>
              <span className='px-5'>{' break;'}</span>
              <span className='flex gap-2'>{' case'} <span className='text-violet-900'>{'value2 :'}</span></span>
              <span className='px-8 opacity-50'>{'// code to be executed if expression == value2'}</span>
              <span className='px-5'>{' break;'}</span>
              <span className='flex gap-2'>{' case'} <span className='text-violet-900'>{'value3 :'}</span></span>
              <span className='px-8 opacity-50'>{'// code to be executed if expression == value3'}</span>
              <span className='px-5'>{' break;'}</span>
              <span>{'default:'}</span>
              <span className='px-8 opacity-50'>{'// code to be executed if expression does not match any of the values'}</span>
              <span>{'}'}</span>

              <p className='font-bold text-sm sm:text-md pt-4'>In this structure, the "expression" is evaluated and compared to each of the "case" values. If the "expression" matches a "case" value, the corresponding block of code is executed. The "break" statement is used to exit the "switch" statement.</p>
            </div>
          </div>

        </div>
      </div>
      <div className="pagination flex justify-around items-center">
        <Link href="/Tutorials/CSS" ><button className="text-md sm:text-lg lg:text-xl transition-all duration-200 ease-in hover:scale-90 text-violet-500 border-2 border-violet-400 px-4 py-1 font-bold rounded-lg cursor-pointer">Previous</button></Link>

        <Link href="/Tutorials/Tailwind" ><button className="text-md sm:text-lg lg:text-xl right-[70px] transition-all duration-200 ease-in hover:scale-90 text-violet-500 border-2 border-violet-400 px-4 py-1 font-bold rounded-lg cursor-pointer">Next</button></Link>
      </div>
    </>
  )
}

export default javascriptpage
