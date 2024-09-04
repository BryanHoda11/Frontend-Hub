"use client"

import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { data: session } = useSession()

  const [subtutorials, setsubtutorials] = useState(false);
  const [subtutorials2, setsubtutorials2] = useState(false);
  const [handleNav, sethandleNav] = useState(false);
  const [dropdown, setdropdown] = useState(false);


  const handleSubTutorials = (isVisible) => {
    setsubtutorials(isVisible)
  }

  const handleSubTutorials2 = () => {
    setsubtutorials2(!subtutorials2)
  }

  const handlesubNav = () => {
    sethandleNav(!handleNav)
  }

  const handleDropdown = () => {
    setdropdown(!dropdown)
  }

  return (
    <>
      <nav className='flex justify-between bg-violet-950 p-4'>
        <Link href="/" className="logo px-2 text-xl font-bold flex items-center gap-2 cursor-pointer custom-font"> <span>{`</>`}</span> Frontend Hub </Link>

        <ul className='hidden lg:flex gap-5 items-center relative'>

          <Link href="/Tutorials" target='_blank'
            onMouseOver={() => handleSubTutorials(true)}
            onMouseLeave={() => handleSubTutorials(false)} className='px-3 cursor-pointer flex items-center gap-2 hover:text-violet-400 transition-all duration-200 ease-in' >Tutorials <FaAngleDown />
            {subtutorials && <ol className='absolute rounded-b-lg flex flex-col top-[40px] bg-violet-950 w-1/2 px-5 py-3 z-10 gap-3'>
              <Link href="/Tutorials/HTML" className='text-white hover:text-violet-500 transition-all duration-200 ease-in'>HTML</Link>
              <Link href="/Tutorials/CSS" className='text-white hover:text-violet-500 transition-all duration-200 ease-in'>CSS</Link>
              <Link href="/Tutorials/Javascript" className='text-white hover:text-violet-500 transition-all duration-200 ease-in'>JavaScript</Link>
              <Link href="/Tutorials" target='_blank' className='opacity-70 text-violet-300 hover:text-white transition-all duration-200 ease-in'>Learn More...</Link>
            </ol>}
          </Link>

          <Link href='https://github.com/BryanHoda11' target='_blank'>
            <li className='flex items-center gap-2 cursor-pointer hover:text-violet-400 transition-all duration-200 ease-in'> <FaGithub style={{ fontSize: '23px' }} />
              <span className='text-xs'>My Github</span>
            </li>
          </Link>

          {session && <li onBlur={() => setdropdown(false)} onClick={handleDropdown} className='px-4 py-2 text-sm rounded-lg cursor-pointer flex items-center gap-2 bg-violet-600 relative'> Welcome <span className='font-bold'>{session.user.email}</span> <FaAngleDown />
            {dropdown && <div className="absolute z-10 rounded-b-lg w-full py-4 top-[40px] bg-violet-950">
              <button onClick={() => signOut()} className='text-white ml-16 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 w-1/2'>Logout</button>
            </div>}
          </li>}

          {!session && <Link href="/Login" target='_blank'><button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2'>Login</button></Link>}
        </ul>

        <div className='another-nav flex lg:hidden items-center'>
          {handleNav ? <FaTimes onClick={handlesubNav} style={{ fontSize: '23px' }} className='hover:text-violet-500 transition-all duration-200 ease-in cursor-pointer' /> : <GiHamburgerMenu onClick={handlesubNav} style={{ fontSize: '23px' }} className='hover:text-violet-500 transition-all duration-200 ease-in cursor-pointer' />}
        </div>

        {handleNav && <ul className='another-nav flex flex-col gap-4 z-10 bg-violet-950 min-h-[200px] px-3 w-full md:w-[50%] absolute right-0 top-[60px]'>
          <li onClick={handleSubTutorials2} className='text-white cursor-pointer flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center me-2'>Tutorials <FaAngleDown />
          </li>

          {subtutorials2 && <ol className='flex flex-col text-white w-full px-5 py-3 gap-3'>
            <Link href="/Tutorials/HTML" className='hover:text-violet-500 transition-all duration-200 ease-in'>HTML</Link>
            <Link href="/Tutorials/CSS" className='hover:text-violet-500 transition-all duration-200 ease-in'>CSS</Link>
            <Link href="/Tutorials/Javascript" className='hover:text-violet-500 transition-all duration-200 ease-in'>JavaScript</Link>
            <Link href="/Tutorials" target='_blank' className='opacity-70 text-violet-300 hover:text-white transition-all duration-200 ease-in'>
              Learn More...
            </Link>
          </ol>}

          <Link href='https://github.com/BryanHoda11' target='_blank'>
            <li className='flex items-center justify-center gap-4 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2'> <FaGithub style={{ fontSize: '23px' }} />
              <span className='text-xs'>My Github</span>
            </li>
          </Link>

          {session && <div className='buttons mb-2 flex gap-3 text-xs justify-center items-center'>
            <button >Welcome <span className='font-bold'>{session.user.email}</span></button>
            <button onClick={() => signOut()} className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2'>Logout</button>
          </div>}

          {!session && <Link href="/Login" target='_blank'><button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2'>Login</button></Link>}
        </ul>}

      </nav >
    </>
  )
}

export default Navbar