import React from "react";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#000000]"
    >
      <div className="max-w-[1050px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 text-gray-300 border-[#5ce1e6]">
            Projects
          </p>
          <p className="py-6">
            Check out some of my projects. More coming soon.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="group container rounded-md flex justify-center items-center mx-auto content-div border-l-2 border-b-2 border-t-2 border-r-2 ">
            <span className="text-xl font-semibold text-center transition-opacity duration-300 group-hover:opacity-0">
              Educational App
            </span>
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Android application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/NabneetBhattacharjee/EducationalApp">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text text-gray-700 font-bold text-lg">
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="group container rounded-md flex justify-center items-center mx-auto content-div border-l-2 border-b-2 border-t-2 border-r-2 ">
            <span className="text-xl font-semibold text-center transition-opacity duration-300 group-hover:opacity-0">
              Currency converter
            </span>
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Android application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/NabneetBhattacharjee/currency-converter">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text text-gray-700 font-bold text-lg">
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="group container rounded-md flex justify-center items-center mx-auto content-div border-l-2 border-b-2 border-t-2 border-r-2 ">
            <span className="text-xl font-semibold text-center transition-opacity duration-300 group-hover:opacity-0">
              QR code generator
            </span>
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Android application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/NabneetBhattacharjee/QRGenerator">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text text-gray-700 font-bold text-lg">
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="group container rounded-md flex justify-center items-center mx-auto content-div border-l-2 border-b-2 border-t-2 border-r-2 ">
            <span className="text-xl font-semibold text-center transition-opacity duration-300 group-hover:opacity-0">
              QR code scanner
            </span>
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Android application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/NabneetBhattacharjee/QRScanner">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text text-gray-700 font-bold text-lg">
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="group container rounded-md flex justify-center items-center mx-auto content-div border-l-2 border-b-2 border-t-2 border-r-2 ">
            <span className="text-xl font-semibold text-center transition-opacity duration-300 group-hover:opacity-0">
              Sclara event website
            </span>
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Basic website
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/NabneetBhattacharjee/MajorWebsite">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text text-gray-700 font-bold text-lg">
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
