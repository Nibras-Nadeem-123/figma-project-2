import { Heebo } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const inter = Heebo({ subsets: ['latin'] });

const Feature = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 md:px-[10%] py-10">
      {/* Heading */}
      <div className="mb-8">
        <p className={`${inter.className} text-[20px] md:text-[22px] font-semibold`}>
          Featured Work
        </p>
      </div>

      {/* Featured Sections */}
      {[1, 2, 3 ].map((item, index) => (
        <section key={index} className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 mb-16">
          {/* Image */}
          <div className="w-full md:w-[346px] flex-shrink-0">
            <Image
              src={`/feature${item}.png`}
              alt={`Feature ${item}`}
              width={346}
              height={300}
              className="rounded-md object-cover w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col space-y-4 md:space-y-5">
            <p
              className={`${inter.className} font-extrabold text-[22px] md:text-[30px]`}
            >
              Designing Dashboards
            </p>
            <div className="flex items-center space-x-3 md:space-x-5">
              <span
                className={`${inter.className} bg-backgroundButton text-white text-[14px] md:text-[18px] px-3 py-1 rounded-full`}
              >
                2020
              </span>
              <span className="text-[14px] md:text-[18px] text-gray-700">Dashboard</span>
            </div>
            <p
              className={`${inter.className} text-[14px] md:text-[18px] text-heroText`}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Feature;
