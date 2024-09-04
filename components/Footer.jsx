"use client"

import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <footer className='shadow-lg shadow-violet-400 text-black min-h-[280px] relative mt-10 w-[98%] px-4 mb-4 rounded-xl mx-auto'>

                <div className="logo sm:block font-bold cursor-default pt-1"> <span className='text-xl sm:text-4xl'>{`</>`}</span> </div>

                <div className="absolute right-0 top-0">
                    <ol className="logos py-3 px-3 flex lg:flex-col items-baseline gap-3 text-xs sm:text-md">
                        <Link href='https://github.com/BryanHoda11' target='_blank'><li className='flex items-center gap-3 hover:text-violet-700'><FaGithub style={{ fontSize: '23px' }} /> GitHub </li> </Link>
                        <li className='flex cursor-pointer items-center gap-3 hover:text-violet-700'><FaInstagram style={{ fontSize: '23px' }} /> Instagram  </li>
                        <li className='flex cursor-pointer items-center gap-3 hover:text-violet-700'> <FaXTwitter style={{ fontSize: '23px' }} /> Twitter </li>
                    </ol>
                </div>

                <p className='text-md sm:text-xl text-center pt-14'>Your place to read & learn about <span className='text-violet-600 font-bold'> Frontend Web dev </span> today!</p>

                <hr className='h-[2px] w-[75%] mx-auto opacity-40 bg-violet-900 my-8' />

                <div className='text-xs sm:text-sm text-violet-800 font-bold flex justify-center absolute bottom-0 right-0 left-0 py-5 cursor-default'> Copyright &copy; Frontend Hub. All rights reserved!</div>

            </footer>
        </>
    )
}

export default Footer