import { Heebo } from 'next/font/google'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import React from 'react'
import Link from 'next/link';

const inter = Heebo({subsets:["latin"]})

const Footer = () => {
  return (
    <div className='bg-footer w-[1345px] p-10 pb-5'>
      <div className={`${inter.className} p-5`}>
        <div className='flex ml-[43%] my-5 space-x-5'>
            <Link href={"/"}><FaFacebookSquare className='h-[30px] w-[30px] hover:h-[35px] hover:w-[35px]'/></Link>
            <Link href={"/"}><FaInstagram className='h-[30px] w-[30px] hover:h-[35px] hover:w-[35px]'/></Link>
            <Link href={"/"}><IoLogoTwitter className='h-[30px] w-[30px] hover:h-[35px] hover:w-[35px]'/></Link>
            <Link href={"/"}><FaLinkedin className='h-[30px] w-[30px] hover:h-[35px] hover:w-[35px]'/></Link>
        </div>
        <p className='text-center text-[22px] font-semibold'>
        Copyright ©2020 All rights reserved 
        </p>
     </div>
    </div>
  )
}

export default Footer
