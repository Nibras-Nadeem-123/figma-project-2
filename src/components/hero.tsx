import { Heebo } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const inter = Heebo({ subsets: ['latin'] });

const Hero = () => {
  return (
    <div>
      <section className="text-heroText flex flex-col-reverse md:space-x-40 md:flex-row justify-between items-center md:justify-evenly max-w-screen-xl mx-auto mt-10 md:mt-[10%] px-5">
        {/* Text Content */}
        <div className={`${inter.className} text-center md:text-left w-full md:w-[521px]`}>
          <p className="text-[32px] md:text-[48px] font-extrabold py-3">
            Hi, I am John<br />
            Creative Technologist
          </p>
          <p className="my-4 text-sm md:text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <button className="bg-backgroundButton hover:bg-red-300 my-5 w-[160px] md:w-[205px] h-[45px] md:h-[50px] rounded-sm text-white shadow-md shadow-gray-600 transition-transform transform hover:scale-105">
            Download Resume
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-[200px] h-[200px] md:w-[292px] md:h-[299px] rounded-full mb-6 md:mb-0">
          <Image
            src={'/heroImage.png'}
            alt="Hero Image"
            height={300}
            width={300}
            className="rounded-full z-50"
          />
          <div className="absolute bg-backgroundEllipse rounded-full h-[200px] w-[200px] md:h-[299px] md:w-[292px] -z-10 top-2 md:top-1 right-2 md:right-1" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
