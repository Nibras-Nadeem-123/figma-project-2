import { Heebo } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const inter = Heebo({subsets: ["latin"]})

const Hero = () => {


  return (
    <div>
      <section className='text-heroText flex justify-evenly w-[1345px] mx-auto mt-[10%] '>
        <div className={`${inter.className} w-[521px] h-[305px]`}>
        <p className=' text-[48px] font-extrabold py-5'>Hi, I am John<br/>
        Creative Technologist</p>
        <p className='my-2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <button className='bg-backgroundButton hover:bg-red-300 my-5 w-[205px] h-[50px] rounded-sm text-white shadow-md shadow-gray-600 hover:h-[60px] hover:w-[210px]'>Download Resume</button>
        </div>
        <div className=' relative w-[292px] h-[299px] rounded-full ml-3'>
            <Image 
            src={'/heroImage.png'} 
            alt='' 
            height={300} 
            width={300} 
            className='rounded-full z-50'
            />
            <div className='absolute bg-backgroundEllipse rounded-full h-[299px] w-[292px] -z-10 top-1 right-1'/>
        </div>
      </section>
    </div>
  )
}

export default Hero
