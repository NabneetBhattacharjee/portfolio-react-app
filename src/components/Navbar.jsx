import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { HiPhone } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h- [80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300">
      <div>
        <img src={logo} alt="Logo" style={{ width: "50px" }} />
      </div>
      {/*menu*/}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
        </ul>
      </div>

      {/*Hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="/resume.pdf"
            download={true}
          >
            My resume
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/nabneet-bhattacharjee/"
          >
            LinkedIn
            <FaLinkedin className="px-2 size={30}" />
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/NabneetBhattacharjee"
          >
            GitHub
            <FaGithub className="px-2 size={30}" />
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a
            className="flex justify-between items-center w-full text-gray-300 px-2"
            href="mailto:navneet.bhattacharjee@gmail.com"
          >
            Email
            <SiGmail className="px-2 size={30}" />
          </a>
        </li>
      </ul>

      {/*Social media icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/nabneet-bhattacharjee/"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/NabneetBhattacharjee"
            >
              GitHub
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#d43838]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:navneet.bhattacharjee@gmail.com"
            >
              Email
              <SiGmail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3de3e9]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              Phone
              <HiPhone size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/resume.pdf"
              download={true}
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
