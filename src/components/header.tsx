import {Inter} from "next/font/google";
import Link from "next/link";

const inter = Inter({subsets:["latin"]})


const Header = () => {

  const navItem = [
    {
      name: "Work",
      link:"#"
    },{
      name: "Blog",
      link:"#"
    },{
      name: "Contact",
      link:"#"
    }
  ]

  return (
    <div className="p-5">
      <ul className={`${inter.className} flex justify-end items-center space-x-16 mt-[66px] ml-[60px] mr-[60px] font-medium text-[20px]  `}>
         {navItem.map((item, i) => (
          <li key={i} className="hover:text-blue-600 hover:underline">
            <Link href={item.link}>{item.name}</Link>
          </li>
         ))}
      </ul>
    </div>
  )
}

export default Header
