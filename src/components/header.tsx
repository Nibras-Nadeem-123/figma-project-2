import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  const navItem = [
    {
      name: "Work",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
  ];

  return (
    <header className="p-10 justify-end">
      <nav className="flex justify-end items-center">
         
        <ul
          className={`${inter.className} hidden md:flex items-center mr-20 space-x-8 font-medium text-[18px]`}
        >
          {navItem.map((item, i) => (
            <li key={i} className="hover:text-blue-600 hover:underline">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <ul
        id="mobile-menu"
        className={`${inter.className} flex-col space-y-4 mt-4 md:hidden text-center font-medium text-[16px] hidden`}
      >
        {navItem.map((item, i) => (
          <li key={i} className="hover:text-blue-600 hover:underline">
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
