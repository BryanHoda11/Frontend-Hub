"use client"

import React, { useState } from 'react'
import { FaRegCircle } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { CiFolderOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Link from "next/link"

const Nextjspage = () => {
  const [left, setleft] = useState(false);
  const [subrouting, setsubrouting] = useState(false);
  const [subrendering, setsubrendering] = useState(false);
  const [substyling, setsubstyling] = useState(false);
  const [suboptimize, setsuboptimize] = useState(false);

  const handleLeft = () => {
    setleft(!left)
  }

  const handlesubRouting = () => {
    setsubrouting(!subrouting)
  }

  const handlesubRendering = () => {
    setsubrendering(!subrendering)
  }

  const handlesubStyling = () => {
    setsubstyling(!substyling)
  }

  const handlesubOptimize = () => {
    setsuboptimize(!suboptimize)
  }

  return (
    <>
      <div className="nextjs-container block lg:flex lg:gap-2">
        <div className="toggle-left block lg:hidden">
          {left ? <FaTimes onClick={handleLeft} className='pl-3 z-20 absolute text-violet-600 hover:text-violet-800 transition-all duration-200 ease-in cursor-pointer' style={{ fontSize: '23px' }} /> : <GiHamburgerMenu onClick={handleLeft} className='pl-3 text-violet-600 hover:text-violet-800 transition-all duration-200 ease-in cursor-pointer' style={{ fontSize: '23px' }} />}
        </div>

        <div className="left bg-violet-200 hidden lg:flex flex-col w-[23%] h-[80vh] overflow-y-scroll text-black py-7 px-8">

          <div className="intro my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>NEXT LEVEL WITH NEXT.JS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Getting Started</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Installation</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Project Files Structure</li>
            </ul>
          </div>

          <div className="building my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>BUILDING YOUR APP</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Routing <FaAngleDown onClick={handlesubRouting} /></li>
              {subrouting && <div className='flex flex-col gap-3'>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Defining Routes</li>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Pages</li>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Dynamic Routes</li>
              </div>}

              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Data Fetching & Catching</li>

              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Rendering <FaAngleDown onClick={handlesubRendering} /></li>
              {subrendering && <div className='flex flex-col gap-3'>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Server Components</li>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Client Components</li>
              </div>}

              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Syling <FaAngleDown onClick={handlesubStyling} /></li>
              {substyling && <div className='flex flex-col gap-3'>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> CSS</li>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Tailwind CSS</li>
              </div>}

              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Optimizing <FaAngleDown onClick={handlesubOptimize} /></li>
              {suboptimize && <div className='flex flex-col gap-3'>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Image Component</li>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Video / iFrame</li>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Script Component</li>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Lazy Loading</li>
              </div>}

              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Authentication</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> API Reference</li>

              <div className="library my-4">
                <h2 className='text-violet-500 text-lg font-bold underline'>OTHER NEXT.JS LIBRARIES</h2>
                <ul className='flex flex-col gap-3 my-3'>
                  <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> NextAuth.js</li>
                </ul>
              </div>
            </ul>
          </div>
        </div>

        {left && <div className="left-2 bg-violet-200 lg:flex flex-col w-[95%] sm:w-1/2 lg:w-[23%] h-[100vh] z-10 absolute overflow-y-scroll text-black py-7 px-8">

          <div className="intro my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>NEXT LEVEL WITH NEXT.JS</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Getting Started</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Installation</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Project Files Structure</li>
            </ul>
          </div>

          <div className="building my-4">
            <h2 className='text-violet-500 text-lg font-bold underline'>BUILDING YOUR APP</h2>
            <ul className='flex flex-col gap-3 my-3'>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Routing <FaAngleDown onClick={handlesubRouting} /></li>
              {subrouting && <div className='flex flex-col gap-3'>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Defining Routes</li>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Pages</li>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Dynamic Routes</li>
              </div>}

              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Data Fetching & Catching</li>

              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Rendering <FaAngleDown onClick={handlesubRendering} /></li>
              {subrendering && <div className='flex flex-col gap-3'>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Server Components</li>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Client Components</li>
              </div>}

              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Syling <FaAngleDown onClick={handlesubStyling} /></li>
              {substyling && <div className='flex flex-col gap-3'>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> CSS</li>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Tailwind CSS</li>
              </div>}

              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Optimizing <FaAngleDown onClick={handlesubOptimize} /></li>
              {suboptimize && <div className='flex flex-col gap-3'>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Image Component</li>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Video / iFrame</li>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Script Component</li>
                <li className='text-violet-800 text-sm opacity-60 px-8 hover:font-bold transition-all duration-200 cursor-pointer'> Lazy Loading</li>
              </div>}

              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> Authentication</li>
              <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> API Reference</li>

              <div className="library my-4">
                <h2 className='text-violet-500 text-lg font-bold underline'>OTHER NEXT.JS LIBRARIES</h2>
                <ul className='flex flex-col gap-3 my-3'>
                  <li className='text-violet-600 flex items-center gap-2 hover:font-bold transition-all duration-200 cursor-pointer'><FaRegCircle style={{ fontSize: '10px' }} /> NextAuth.js</li>
                </ul>
              </div>
            </ul>
          </div>
        </div>}

        <div className="right w-full lg:w-[75%] text-black z-0 py-5 px-3">
          <div className="intro mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Go Next level with Next.js!</h1>
            <div className='my-10'>
              <h3 className='text-lg my-4 text-violet-500 font-bold'>What is Next.js ?</h3>
              <p className='text-md my-2 text-violet-700'>Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations. Next.js automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.</p>
            </div>

            <div className="my-5">
              <h3 className='text-lg my-4 text-violet-500 font-bold'>Features of Next.js </h3>
              <p className='text-md my-2 text-violet-700'>Next.js offers the following features and advantages :</p>

              <div className="bg-violet-400 w-full mx-auto rounded-lg my-4 px-5 py-4 text-black">

                <table className="w-full table-auto px-3 py-3">
                  <thead>
                    <tr>
                      <th className="font-bold">Feature</th>
                      <th className="font-bold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-6"> 
                    <tr className="border-black border-b-[1px]">
                      <td className="py-2 align-top">Routing</td>
                      <td className="pl-8 py-2 text-left align-top">A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.</td>
                    </tr>
                    <tr className="border-black border-b-[1px]">
                      <td className="py-2 align-top">Rendering</td>
                      <td className="pl-8 py-2 text-left align-top">Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes.</td>
                    </tr>
                    <tr className="border-black border-b-[1px]">
                      <td className="py-2 align-top">Data Fetching</td>
                      <td className="pl-8 py-2 text-left align-top">Simplified data fetching with async/await in Server Components, and an extended fetch API for request memoization, data caching, and revalidation.</td>
                    </tr>
                    <tr className="border-black border-b-[1px]">
                      <td className="py-2 align-top">Styling</td>
                      <td className="pl-8 py-2 text-left align-top">Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS.</td>
                    </tr>
                    <tr className="border-black border-b-[1px]">
                      <td className="py-2 align-top">Optimization</td>
                      <td className="pl-8 py-2 text-left align-top">Image, Fonts, and Script Optimizations to improve your application's Core Web Vitals and User Experience.</td>
                    </tr>
                    <tr className="border-black">
                      <td className="py-2 align-top">TypeScript</td>
                      <td className="pl-8 py-2 text-left align-top">Improved support for TypeScript, with better type checking and more efficient compilation.</td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>

            <div className="installation my-5">
              <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Installation</h1>

              <div className='bg-violet-400 w-[80%] sm:w-1/2 mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h3 className='text-md font-bold text-black'>Terminal :</h3>
                <span>{'npx create-next-app@latest'}</span>
              </div>

              <div className='bg-violet-400 w-full sm:w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h3 className='text-md font-bold text-black'>Terminal &rarr; You will get these following prompts :</h3>
                <span>{'1. What is your project named? my-app'}</span>
                <span>{'2. Would you like to use TypeScript? No / Yes'}</span>
                <span>{'3. Would you like to use ESLint? No / Yes'}</span>
                <span>{'4. Would you like to use Tailwind CSS? No / Yes'}</span>
                <span>{'5. Would you like your code inside a `src/` directory? No / Yes'}</span>
                <span>{'6. Would you like to use App Router? (recommended) No / Yes'}</span>
                <span>{'7. Would you like to customize the import alias (`@/*` by default)? No / Yes'}</span>

                <p className='text-sm font-bold text-black pt-5'>Answrer each prompt with yes / no depending on the type of project you want to make.</p>
              </div>

              <div className='bg-violet-400 w-full md:w-[85%] lg:w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h3 className='text-md font-bold text-black'>Terminal :</h3>
                <span className='flex sm:flex-row flex-col sm:gap-3 sm:items-center pb-3 sm:pb-0'>npm run dev <span className='opacity-50'>// to start Next.js in development mode.</span> </span>
                <span className='flex sm:flex-row flex-col sm:gap-3 sm:items-center pb-3 sm:pb-0'>npm run start <span className='opacity-50'>// to start a Next.js production server.</span> </span>
                <span className='flex sm:flex-row flex-col sm:gap-3 sm:items-center pb-3 sm:pb-0'>npm run build <span className='opacity-50'>// to build the application for production usage.</span> </span>
                <span className='flex sm:flex-row flex-col sm:gap-3 sm:items-center pb-3 sm:pb-0'>npm run lint <span className='opacity-50'>// to set up Next.js' built-in ESLint configuration.</span> </span>
              </div>

              <p className='text-md my-2 text-violet-700 font-bold'>Finally your Next app will be created. Go into the 'App' directory and go to page.js file.</p>

              <div className='bg-violet-400 w-[80%] sm:w-1/2 mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h3 className='text-md font-bold text-black pb-3'>App/page.js :</h3>
                <span>{'export default function Page() {'}</span>
                <span className='px-5'>{'return <h1>Hello, Next.js!</h1>'}</span>
                <span>{'}'}</span>
              </div>

              <p className='text-md my-2 text-violet-700 font-bold'>Now, you can build from here anything! Small to large.</p>
            </div>
          </div>

          <div className="routing mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Routing in Nextjs</h1>
            <p className='text-md my-2 text-violet-700'>The skeleton of every application is routing. irst, you will see these terms being used throughout the documentation :</p>

            <ul className='text-md my-2 pt-3 text-violet-700 flex flex-col font-bold gap-2'>
              <li>1. Tree: A convention for visualizing a hierarchical structure. For example, a component tree with parent and children components, a folder structure, etc.</li>
              <li>2. Subtree: Part of a tree, starting at a new root (first) and ending at the leaves (last).</li>
              <li>3. Root: The first node in a tree or subtree, such as a root layout.</li>
              <li>4. Leaf: Nodes in a subtree that have no children, such as the last segment in a URL path.</li>
            </ul>

            <div className="my-5">
              <h3 className='text-lg my-4 text-violet-500 font-bold'>The App Router</h3>
              <p className='text-md my-2 text-violet-700'>Next.js introduced a new App Router built on React Server Components, which supports shared layouts, nested routing, loading states, error handling, and more. The App Router works in a new directory named app. This allows you to opt some routes of your application into the new behavior while keeping other routes in the pages directory.</p>

              <div className='bg-violet-400 w-[80%] sm:w-1/2 mx-auto rounded-lg my-4 flex flex-col items-center justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h3 className='text-md font-bold text-black pb-3'>How your file structure will look :</h3>
                <span className='flex items-center gap-2'><CiFolderOn style={{ fontSize: '20px' }} /> app</span>
                <span className='px-8 flex items-center gap-2'><CiFolderOn /> ...</span>
                <span className='flex items-center gap-2'><CiFolderOn style={{ fontSize: '20px' }} /> pages</span>
                <span className='px-8 flex items-center gap-2'><CiFolderOn /> ...</span>
              </div>
              <p className='text-md my-2 text-violet-700 font-bold'>By default, components inside app are React Server Components. This is a performance optimization and allows you to easily adopt them, and you can also use Client Components.</p>
            </div>

            <div className="pages my-5">
              <h3 className='text-lg my-4 text-violet-500 font-bold'>Pages</h3>
              <p className='text-md my-2 text-violet-700'>A page is UI that is unique to a route. You can define a page by default exporting a component from a page.js file. For example, to create your 'Home' page, add the page.js file inside the app directory.</p>

              <div className='bg-violet-400 w-full sm:w-1/2 mx-auto rounded-lg my-4 flex flex-col  justify-center px-5 py-4 gap-2 text-black font-bold'>
                <span className='flex items-center gap-2'><CiFolderOn style={{ fontSize: '20px' }} /> app <span className='opacity-50 text-xl pl-7'> &rarr; /</span></span>
                <span className='px-8 flex items-center gap-2'><CiFolderOn /> page.js</span>
                <span className='flex items-center gap-2 px-6'><CiFolderOn style={{ fontSize: '20px' }} /> About <span className='opacity-50 text-md pl-7'> &rarr; /About</span></span>
                <span className='px-12 flex items-center gap-2'><CiFolderOn /> page.js</span>
                <span className='flex items-center gap-2 px-6'><CiFolderOn style={{ fontSize: '20px' }} /> Contact <span className='opacity-50 text-md pl-7'> &rarr; /Contact</span></span>
                <span className='px-12 flex items-center gap-2'><CiFolderOn /> page.js</span>

                <h3 className='text-md font-bold text-black pt-5'>Though this we can do file - based routing and route between pages.</h3>
              </div>
            </div>

            <div className="dynamic-routes my-5">
              <h3 className='text-lg my-4 text-violet-500 font-bold'>Dynamic Routes in Next.js</h3>
              <p className='text-md my-2 text-violet-700'>A Dynamic Segment can be created by wrapping a folder's name in square brackets. For example, [val] , [slug] or [username]. This way we can easily create sub pages of the same category.</p>

              <p className='text-md my-2 text-violet-700 font-bold'>Let's take an example of a blog website. a blog could include the following route <span className='text-lg font-bold'>app/blog/[slug]/page.js</span> where [slug] is the Dynamic Segment for blog posts. 'Slug' will contain the URL of pages we want to route dynamically.</p>
              <div className='bg-violet-400 w-full sm:w-[75%] lg:w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h3 className='text-md font-bold text-black pb-3'>app/blog/[slug]/page.js :</h3>
                <span>{'export default function Page({ params }) {'}</span>
                <span className='px-5'>{'return <div>My Post: {params.slug}</div>'}</span>
                <span>{'}'}</span>

                <div className="example pt-6 flex justify-around">
                  <div className='features'>
                    <h4 className='text-lg pb-4 underline font-bold'>Example URL</h4>
                    <ul className='flex flex-col gap-3 text-sm pr-10'>
                      <li>/blog/html</li>
                      <li>/blog/css</li>
                      <li>/blog/javascript</li>
                    </ul>
                  </div>

                  <div className='features'>
                    <h4 className='text-lg pb-4 underline font-bold'>Params</h4>
                    <ul className='flex flex-col gap-3 text-sm pr-10'>
                      <li>{'{ slug: html }'}</li>
                      <li>{'{ slug: css }'}</li>
                      <li>{'{ slug: javascript }'}</li>
                    </ul>
                  </div>
                </div>
                <p className='text-md font-bold pt-4 text-black pb-3'>[slug] and params helps us dynamically route between different blog posts as in the above example.</p>
              </div>
            </div>
          </div>

          <div className="styling mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Styling in Nextjs</h1>
            <p className='text-md my-2 text-violet-700'>Next.js supports different ways of styling your application!</p>

            <ul className='text-md my-2 pt-3 text-violet-700 flex flex-col font-bold gap-2'>
              <li>1. CSS Modules: Create locally scoped CSS classes to avoid naming conflicts and improve maintainability.</li>
              <li>2. Global CSS: Simple to use and familiar for those experienced with traditional CSS, but can lead to larger CSS bundles and difficulty managing styles as the application grows.</li>
              <li>3. Tailwind CSS: A utility-first CSS framework that allows for rapid custom designs by composing utility classes.</li>
              <li>4. Sass: A popular CSS preprocessor that extends CSS with features like variables, nested rules, and mixins.</li>
              <li>5. CSS-in-JS: Embed CSS directly in your JavaScript components, enabling dynamic and scoped styling.</li>
            </ul>

            <p className='text-md my-2 py-5 text-violet-700 font-bold'>I wil but only cover styling through CSS & Tailwind CSS.</p>

            <div className="my-5">
              <h3 className='text-lg my-4 text-violet-500 font-bold'>CSS</h3>
              <p className='text-md my-2 text-violet-700'>Next.js supports multiple ways of handling CSS, including:</p>
              <ul className='text-md my-2 pt-3 text-violet-700 flex flex-col font-bold gap-5'>
                <li>1. <span className='text-violet-800 font-bold underline text-lg'>CSS Modules</span> : Next.js has built-in support for CSS Modules using the '.module.css' extension. CSS Modules locally scope CSS by automatically creating a unique class name. This allows you to use the same class name in different files without worrying about collisions. This behavior makes CSS Modules the ideal way to include component-level CSS.</li>

                <li>2. <span className='text-violet-800 font-bold underline text-lg'>Global Styles</span> : Global styles can be imported into any layout, page, or component inside the app directory. For example, consider a stylesheet named app/global.css:</li>

                <div className='bg-violet-400 w-full sm:w-[70%] mx-auto my-5 rounded-lg flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                  <h4 className='text-black text-sm pb-4'>app/global.css :</h4>
                  <span>{'body {'}</span>
                  <span className='px-6'>{'padding: 20px 20px 60px;'}</span>
                  <span className='px-6'>{'max-width: 680px;'}</span>
                  <span className='px-6'>{'margin: 0 auto;'}</span>
                  <span className='pb-5'>{'}'}</span>

                  <span>{' * {'}</span>
                  <span className='px-6'>{'padding: 0;'}</span>
                  <span className='px-6'>{'margin: 0 ;'}</span>
                  <span className='px-6'>{'box-sizing: border-box;'}</span>
                  <span>{'}'}</span>
                </div>
                <li>3. <span className='text-violet-800 font-bold underline text-lg'>External Stylesheets</span> : Stylesheets published by external packages can be imported anywhere in the app directory, including colocated components.</li>
              </ul>
            </div>

            <div className="my-5">
              <h3 className='text-lg my-4 text-violet-500 font-bold'>Tailwind CSS</h3>
              <p className='text-md my-2 text-violet-700'>Tailwind CSS is a utility-first CSS framework that works exceptionally well with Next.js. I have already explained the installation of Tailwind CSS. <Link href="/Tutorials/Tailwind" className='underline font-bold cursor-pointer animate-pulse'>Click here</Link> to go through the steps.</p>

              <div className='bg-violet-400 w-full sm:w-[65%] mx-auto rounded-lg my-4 flex flex-col justify-center px-5 py-4 gap-2 text-black font-bold'>
                <h4 className='text-black text-sm pb-4'>app/page.js :</h4>
                <span>{'export default function Page() {'}</span>
                <span className='px-4'>{'return <h1 className="text-xl font-bold underline">Hello, Next.js!</h1>'}</span>
                <span>{'}'}</span>
                <p className='text-md font-bold pt-4 text-black pb-3'>After installing Tailwind CSS and adding the global styles, you can use Tailwind's utility classes in your application.</p>
              </div>
              <span className='flex items-center gap-3'>Ouput : <h2 className="text-md sm:text-xl underline font-bold">Hello, Next.js!</h2> </span>
            </div>
          </div>

          <div className="authentication mx-0 lg:mx-5 my-5">
            <h1 className='text-xl sm:text-2xl text-violet-500 underline font-bold'>Authentication in Nextjs</h1>
            <p className='text-md my-2 text-violet-700'>Understanding authentication is crucial for protecting your application's data. Authentication verifies if the user is who they say they are. It requires the user to prove their identity with something they have, such as a username and password.</p>

            <p className='text-md my-2 pt-4 text-violet-700 font-bold'>While you can implement a custom auth solution, for increased security and simplicity, we recommend using an authentication library. These offer built-in solutions for authentication, session management, and authorization, as well as additional features such as social logins, multi-factor authentication and more.</p>

            <p className='text-md my-2 pt-4 text-violet-700 font-bold'> I personally recommend using NextAuth.js Library for Authentication. It is farely simple to install and use! <br /> Here is the website : <Link target='_blank' href="https://next-auth.js.org/" className='underline font-bold cursor-pointer animate-pulse'>Click here</Link>. Let's understand Authentication with a simple example :</p>

            <div className='bg-violet-400 w-full sm:w-1/2 mx-auto rounded-lg my-4 flex flex-col items-center justify-center px-5 py-4 gap-2 text-black font-bold'>
              <h3 className='text-md font-bold text-black pb-3'>Without NextAuth :</h3>
              <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 w-[30%]'>Login</button>

              <h3 className='text-md font-bold text-black pb-3 pt-4'>After Using NextAuth :</h3>
              <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 w-[80%]'>Welcome bryanhoda2003@gmail.com</button>
            </div>
            <p className='text-md font-bold pt-4 text-violet-700 pb-3'>NextAuth simply uses ID & Secret (save this in your local environment file to access the Id and Secret) which you can get from the external website from where you wanna use and login. Example Google, GitHub, Facebook etc. It makes use of 'Providers' which you have to import in a component and use it across your Next.js App. NextAuth also by default provides us signIn() & signOut() functions using data and useSession hook from where we can derive data and login / logout users.</p>
          </div>
        </div>
      </div>
      <div className="pagination flex justify-around items-center">
        <Link href="/Tutorials/Reactjs" ><button className="text-md sm:text-lg lg:text-xl transition-all duration-200 ease-in hover:scale-90 text-violet-500 border-2 border-violet-400 px-4 py-1 font-bold rounded-lg cursor-pointer">Previous</button></Link>

        <Link href="/Tutorials" ><button className="text-md sm:text-lg lg:text-xl right-[70px] transition-all duration-200 ease-in hover:scale-90 text-violet-500 border-2 border-violet-400 px-4 py-1 font-bold rounded-lg cursor-pointer">Back</button></Link>
      </div>
    </>
  )
}

export default Nextjspage
