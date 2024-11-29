import { Heebo } from 'next/font/google';
import { FaLinkedin, FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io5';
import React from 'react';
import Link from 'next/link';

const inter = Heebo({ subsets: ['latin'] });

const Footer = () => {
  return (
    <footer className="bg-footer py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Social Icons */}
        <div className="flex justify-center space-x-5 mb-5">
          <Link href="/" aria-label="Facebook">
            <FaFacebookSquare className="h-[30px] w-[30px] hover:h-[35px] hover:w-[35px] transition-all duration-300" />
          </Link>
          <Link href="/" aria-label="Instagram">
            <FaInstagram className="h-[30px] w-[30px] hover:h-[35px] hover:w-[35px] transition-all duration-300" />
          </Link>
          <Link href="/" aria-label="Twitter">
            <IoLogoTwitter className="h-[30px] w-[30px] hover:h-[35px] hover:w-[35px] transition-all duration-300" />
          </Link>
          <Link href="/" aria-label="LinkedIn">
            <FaLinkedin className="h-[30px] w-[30px] hover:h-[35px] hover:w-[35px] transition-all duration-300" />
          </Link>
        </div>

        {/* Footer Text */}
        <p
          className={`${inter.className} text-center text-[16px] md:text-[18px] font-semibold text-gray-700`}
        >
          Copyright ©2020 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
