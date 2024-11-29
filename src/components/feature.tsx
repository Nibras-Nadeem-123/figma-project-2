import { Heebo } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const inter = Heebo({ subsets: ["latin"] })

const Feature = () => {
    return (
        <div className=' h-[522px] w-[1345px] px-[17%] py-[10%] pb-[80%]'>
            <div>
                <p className={`${inter.className} text-[22px] font-semibold w-[152px] h-[32px] -mt-20 pb-5`}>Featured Work</p>
            </div>
            <section>
                <div className='flex  mt-[5%]'>
                    <div className=' '>
                        <Image src={"/feature1.png"} alt='' height={300} width={346} className='rounded-md' />
                    </div>
                    <div className='w-[433.46px] ml-[40px] space-y-5'>
                        <p className={`${inter.className} font-extrabold text-[30px]`}>Designing Dashboards</p>
                        <div className='space-x-5'>
                            <span className={`${inter.className} bg-backgroundButton text-white text-[18px] px-2 rounded-full `}>2020 </span>
                            <span className=''>Dashboard</span>
                        </div>
                        <p className={`${inter.className} text-[18px] text-heroText w-[625px] h-[170px]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex  mt-[10%]'>
                    <div className=' '>
                        <Image src={"/feature2.png"} alt='' height={300} width={346} className='rounded-md' />
                    </div>
                    <div className='w-[433.46px] ml-[40px] space-y-5'>
                        <p className={`${inter.className} font-extrabold text-[20px]`}>Designing Dashboards</p>
                        <div className='space-x-5'>
                            <span className={`${inter.className} bg-backgroundButton text-white text-[18px] px-2 rounded-full `}>2020 </span>
                            <span className=''>Dashboard</span>
                        </div>
                        <p className={`${inter.className} text-[18px] text-heroText w-[625px] h-[170px]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex  mt-[10%]'>
                    <div className=' '>
                        <Image src={"/feature3.png"} alt='' height={300} width={346} className='rounded-md' />
                    </div>
                    <div className='w-[433.46px] ml-[40px] space-y-5'>
                        <p className={`${inter.className} font-extrabold text-[30px]`}>Designing Dashboards</p>
                        <div className='space-x-5'>
                            <span className={`${inter.className} bg-backgroundButton text-white text-[18px] px-2 rounded-full `}>2020 </span>
                            <span className=''>Dashboard</span>
                        </div>
                        <p className={`${inter.className} text-[18px] text-heroText w-[625px] h-[170px]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Feature
