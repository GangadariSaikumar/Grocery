import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";

import { RiShoppingBag4Fill } from "react-icons/ri";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-white fixed top-0 right-0 left-0">
      <nav className="flex px-10 max-w-[1400px] mx-auto h-[12vh] md:h-[14vh] items-center justify-between">
        <a href="#" className="text-3xl font-bold">
          Gr<span className="text-orange-500">O</span>cify
        </a>
        {/* Desktop Menu */}
        <ul className="md:flex hidden items-center gap-x-15">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500 hover:text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex gap-x-5 items-center">
          <div className="md:flex hidden p-1 border-2 border-orange-500 rounded-full ">
            <input
              type="text"
              placeholder="Search... "
              id="text"
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none "
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 justify-center items-center rounded-full flex text-xl ">
              <FaSearch />
            </button>
          </div>
          <a href="#" className="text-zinc-800 text-2xl">
            <FaHeart />
          </a>
          <a href="#" className="text-zinc-800 text-2xl">
            <RiShoppingBag4Fill />
          </a>
          {/* Hamburgar */}
          <a
            href="#"
            onClick={toggleMenu}
            className="text-zinc-800 text-3xl md:hidden"
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </a>
        </div>
        {/* Mobile Menu */}
        <ul
          className={`flex md:hidden items-center gap-x-15 absolute flex-col gap-y-12 bg-orange-500/30 p-10 top-30 -left-full transform -translate-x-1/2 backdrop-blur-lg rounded-xl transition-all duration-500 ${
            showMenu ? "left-1/2" : " "
          }`}
        >
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500 hover:text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
          <li className="flex md:hidden p-1 border-2 border-orange-500 rounded-full ">
            <input
              type="text"
              placeholder="Search... "
              id="text"
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none "
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 justify-center items-center rounded-full flex text-xl ">
              <FaSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
