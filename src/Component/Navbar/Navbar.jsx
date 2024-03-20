import {ReactDOM, useRef, useState} from 'react'; 
import "./Navbar.css";

const Navbar = () => {
  const menuRef = useRef();
  
  const dropdownToggle = () => {
    menuRef.current.classList.toggle("nav-menu-visible");
  }

  return (
    <>
      <div className="flex p-2 justify-between items-center  flex-wrap">
        <div className="flex items-center">
          <h2 className="font-bold text-2xl text-orange-500">LIST</h2>
        </div>
        <div className="relative flex items-center  md:inline-flex search-div">
          <svg className="absolute left-2 h-5 w-6 text-gray-400 hover:text-gray-500 s-icon" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" placeholder="Find (almost) anything" className="border border-gray-200 rounded-2xl py-1 px-2 pl-10 outline-none search" />
        </div>

        <div className="flex items-center gap-8 nav-links nav-menu" ref={menuRef}>
          <ul className='flex gap-5 text-blue-700 list'>
            <li>How it works</li>
            <li>List an Item</li>
          </ul>
          <button className="border px-4 py-1 text-gray-900 rounded-3xl bg-gray-100 login">Login or Sign up</button>
        </div>
        <svg className="hamburger" onClick={dropdownToggle} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
      </div>
  </>
  )
}

export default Navbar;