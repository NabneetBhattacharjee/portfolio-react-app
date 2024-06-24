import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center text-center">
          <div>
            <h1 className="text-2xl font-bold">Thanks for visiting!</h1>
            <p className="text-lg p-2 ">© 2024 Nabneet Bhattacharjee.</p>
            <Link
              to="home"
              smooth
              duration={300}
              className="hover:text-[#5ce1e6] p-2"
            >
              <u>Back to top</u>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
