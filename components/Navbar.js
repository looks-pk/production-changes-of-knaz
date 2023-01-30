import React, { useState } from "react";
import Link from "next/link";

const Navbar = ({user, logout}) => {

const [dropdown, setDropdown] = useState(false)
const [menuOpen, setMenuOpen] = useState(false);



const handleButtonClick = () => {
  setMenuOpen(!menuOpen);
};


  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
    <header className="border-b mb-8">
      <div className="max-w-screen-2xl flex justify-between items-center px-4 md:px-8 mx-auto">
        <Link href="/" className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
          <svg width="95" height="94" viewBox="0 0 95 94" className="w-6 h-auto text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
          </svg>
          
          KNAZ.PK
        </Link>
        <nav className="hidden lg:flex gap-12 2xl:ml-16">
          <Link href="/" className="hover:text-indigo-500 text-gray-600 text-lg font-semibold">Home</Link>
          <Link href="/Tshirts" className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">T-Shirts</Link>
          <Link href="/Soots" className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Soot</Link>
          <Link href="/Contact" className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Contact Us</Link>
        </nav>
        <div className="flex sm:border-l border-r divide-x">
          <a href="#" className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 hidden sm:flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
  
            <span className="hidden sm:block text-gray-500 text-xs font-semibold">Wishlist</span>
          </a>

          {dropdown && <div onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} className="absolute right-80 bg-red-500 text-white top-16 rounded-md px-5 w-36">
            <ul>
              <Link href={'/MyAccount'}><li className="py-1 text-sm cursor-pointer hover:text-yellow-300">My Account</li></Link>
              <Link href={'/Orders'}><li className="py-1 text-sm hover:text-yellow-300 cursor-pointer">Orders</li></Link>
              <li onClick={logout} className="py-1 text-sm hover:text-yellow-300 cursor-pointer">Logout</li>
            </ul>

          </div>}


  
          {user.value && <Link onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} href="/MyAccount" className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="hidden sm:block text-gray-500 text-xs font-semibold">Abdullah</span>
          </Link>}

          {!user.value && <Link href="/Login" className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="hidden sm:block text-gray-500 text-xs font-semibold">Login</span>
          </Link>}
  
          <Link href="/Cart1" className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="hidden sm:block text-gray-500 text-xs font-semibold">Cart</span>
          </Link>
  
          <button onClick={handleButtonClick} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="dropdown-toggle w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex lg:hidden flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">

          {menuOpen && (
          <nav className="fixed right-1 bg-gray-100 text-white top-0 rounded-md  w-[60vw] h-[100vh] border-2 shadow-[1px_35px_300px_-15px_rgba(2,2,5,1.3)] z-20 ">
        <ul className="mt-2 text-black"><p className="text-xl border px-2 border-black absolute top-1 left-1">X</p>
        <li></li>
        <li>KNAZ.PK</li>
          <Link href="/"><li className="border border-red-500 mb-3 mt-5 text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Home</li></Link>
          <Link href="/Tshirts"><li className="border border-red-500 mb-3 text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">T-Shirts</li></Link>
          <Link href="/Soots" ><li className="border border-red-500 mb-3 text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Soot</li></Link>
          <Link href="/Contact" ><li className="border border-red-500 mb-3 text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Contact Us</li></Link>
        </ul>
          </nav>
      )}

            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
           
            <span className="hidden sm:block text-gray-500 text-xs font-semibold">Menu</span>
          </button>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Navbar;
