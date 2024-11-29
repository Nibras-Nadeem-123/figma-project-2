import { Heebo } from 'next/font/google';
import React from 'react';

const inter = Heebo({ subsets: ['latin'] });

const Recent = () => {
  return (
    <div className="flex flex-col justify-center bg-recentBackground max-w-screen-xl mx-auto mt-[10%] pb-[10%] px-6 md:px-[10%]">
      {/* Header */}
      <div className="flex justify-between items-center pt-10 mb-6">
        <p className={`${inter.className} text-[20px] md:text-[22px] font-semibold`}>
          Recent Post
        </p>
        <p
          className={`${inter.className} text-backgroundButton hover:text-red-300 hover:underline cursor-pointer font-semibold text-[20px] md:text-[22px]`}
        >
          View All
        </p>
      </div>

      {/* Cards Section */}
      <section className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0">
        {/* Card 1 */}
        <div className="flex flex-col bg-white p-6 shadow-md rounded-lg">
          <p
            className={`${inter.className} text-[22px] md:text-[26px] font-extrabold mb-4`}
          >
            Making a design system from scratch
          </p>
          <div className="flex items-center space-x-4 text-sm md:text-[18px] text-heroText mb-4">
            <p className={`${inter.className}`}>12 Feb 2020</p>
            <span className="font-semibold">|</span>
            <p className={`${inter.className}`}>Design, Pattern</p>
          </div>
          <p
            className={`${inter.className} text-[14px] md:text-[16px] text-heroText`}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col bg-white p-6 shadow-md rounded-lg">
          <p
            className={`${inter.className} text-[22px] md:text-[26px] font-extrabold mb-4`}
          >
            Making a design system from scratch
          </p>
          <div className="flex items-center space-x-4 text-sm md:text-[18px] text-heroText mb-4">
            <p className={`${inter.className}`}>12 Feb 2020</p>
            <span className="font-semibold">|</span>
            <p className={`${inter.className}`}>Design, Pattern</p>
          </div>
          <p
            className={`${inter.className} text-[14px] md:text-[16px] text-heroText`}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Recent;
