import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#000000] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1050px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-5xl font-bold inline border-b-4 border-[#5ce1e6]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1050px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Nabneet. Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am an aspiring developer and a Master's graduate in IT, with
              experience in full-stack, web development, and mobile application
              development. I have a solid background in coding with
              general-purpose software development languages. My strengths lie
              in problem-solving, effective communication, and teamwork. I am
              eager to contribute my technical skills and foster innovation
              within a dynamic team environment, driving both my professional
              growth and the success of the projects I work on.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
