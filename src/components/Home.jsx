import React from "react";
import HeroImage from "../assets/heroimage.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#000000]">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center h-full px-2 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="sm: text-2xl text-gray-300 max-w-md">Hi! My name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#5ce1e6] ">
            NABNEET BHATTACHARJEE
          </h1>
          <h2 className="text-2xl sm:text-7xl font-bold text-[#8892b0] ">
            I am an aspiring developer.
          </h2>
          <p className="sm:text-2xl text-gray-300 py-4 max-w-md">
            Welcome to my portfolio website!
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={300}
              className="text-white w-fit group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5ce1e6] hover:border-[#5ce1e6]"
            >
              Click here to learn more about me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div className="p-8">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
