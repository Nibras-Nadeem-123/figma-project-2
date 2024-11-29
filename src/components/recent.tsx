import { Heebo } from 'next/font/google'
import React from 'react'

const inter = Heebo({ subsets: ["latin"] })

const Recent = () => {
  return (
    <div className='justify-evenly bg-recentBackground w-[1345px] mt-[10%] pb-[10%] h-[522px] px-[16%]'>
      <div className='flex justify-between w-[930px] pt-10'>
        <p className={`${inter.className} ml-5 w-[120px] h-[32px] top-[26px] text-[22px] font-semibold`}>Recent Post</p>
        <p className={`${inter.className}  text-backgroundButton hover:text-red-300 hover:underline cursor-pointer font-semibold w-[120px] text-[22px]`}>Veiw All</p>
      </div>
      <section className='flex space-x-10'>
        <div className=' h-[356px] w-[428px]  bg-white mt-10 ml-5 p-8'>
          <p className={`${inter.className} text-[26px] w-[383.56px] h-[107.53px] font-extrabold`}>Making a design system from scratch</p>
          <div className='flex w-[301.28px] text-heroText h-[42.12px] top-[128px]'>
            <p className={`${inter.className} w-[109.44px] h-[42.12px] text-[18px]`}>12 Feb 2020</p>
            <p className='font-semibold h-[42.12px]'>|</p>
            <p className={`${inter.className} w-[140.25px] h-[42.12px] text-[18px] ml-5`}>Design , Pattern</p>
          </div>
          <p className={`${inter.className} text-heroText w-[373px] h-[129.7px] text-[16px]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <div className=' h-[356px] w-[428px]  bg-white mt-10 ml-5 p-8'>
          <p className={`${inter.className} text-[26px] w-[383.56px] h-[107.53px] font-extrabold`}>Making a design system from scratch</p>
          <div className='flex w-[301.28px] text-heroText h-[42.12px] top-[128px]'>
            <p className={`${inter.className} w-[109.44px] h-[42.12px] text-[18px]`}>12 Feb 2020</p>
            <p className='font-semibold h-[42.12px]'>|</p>
            <p className={`${inter.className} w-[140.25px] h-[42.12px] text-[18px] ml-5`}>Design , Pattern</p>
          </div>
          <p className={`${inter.className} text-heroText w-[373px] h-[129.7px] text-[16px]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </section>
    </div>
  )
}

export default Recent
