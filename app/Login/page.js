"use client"

import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Login = () => {
  const { data: session } = useSession()
  if (session) {
    const router = useRouter()
    router.push('/Tutorials')
  }

  return (
    <>
      <p className='text-center text-xs sm:text-sm my-3 mx-3 text-violet-800 font-bold'> Warning : Only the Github login works, as I only have Github's ID & Secret</p>

      <div className="login-container text-black bg-violet-300 w-[80%] sm:w-[60%] md:w-[30%] min-h-[500px] mx-auto my-10 rounded-xl">

        <ul className='flex flex-col items-center gap-7 rounded-xl text-xl'>
          <button onClick={() => signIn("github")} className='flex rounded-t-xl items-center justify-center py-7 gap-3 hover:font-bold hover:bg-violet-500 w-full transition-all duration-300 cursor-pointer'>Login with Github <FaGithub style={{ fontSize: '23px' }} /></button>
          <hr className='h-[2px] w-[95%] mx-auto opacity-40 bg-violet-900' />
          <button className='flex items-center justify-center py-7 gap-3 hover:font-bold hover:bg-violet-500 w-full transition-all duration-300 cursor-pointer'>Login with Google <FaGoogle style={{ fontSize: '23px' }} /></button>
          <hr className='h-[2px] w-[95%] mx-auto opacity-40 bg-violet-900' />
          <button className='flex items-center justify-center py-7 gap-3 hover:font-bold hover:bg-violet-500 w-full transition-all duration-300 cursor-pointer'>Login with Facebook <FaFacebookF style={{ fontSize: '23px' }} /></button>
          <hr className='h-[2px] w-[95%] mx-auto opacity-40 bg-violet-900' />
          <button className='flex rounded-b-xl items-center justify-center py-7 gap-3 hover:font-bold hover:bg-violet-500 w-full transition-all duration-300 cursor-pointer'>Login with Twitter <FaXTwitter style={{ fontSize: '23px' }} /></button>
        </ul>

      </div>
    </>
  )
}

export default Login