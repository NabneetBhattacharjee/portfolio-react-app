import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import NodeJs from "../assets/node.png";
import TypeScript from "../assets/typescript.png";
import MongoDB from "../assets/mongo.png";
import CSharp from "../assets/c-sharp.png";
//import Java from "../assets/java.png";
//import Kotlin from "../assets/kotlin.png";
import Python from "../assets/python.png";
import Git from "../assets/git.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#000000] text-gray-300">
      {/*Container*/}
      <div className="max-w-[1050px] mx-auto p-4 flex flex-col justify-center w-ful h-full">
        <div>
          <p className="text-5xl font-bold inline border-b-4 border-[#5ce1e6]">
            Skills
          </p>
          <p className="py-4">
            //These are some of the skills I have learnt and worked with
          </p>
        </div>

        {/*All icons*/}
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-5 text-center py-8">
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="Javascript icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NodeJs} alt="Node icon" />
            <p className="my-4">NODE.JS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={TypeScript}
              alt="Typescript icon"
            />
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MongoDB} alt="Mongo icon" />
            <p className="my-4">MONGODB</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSharp} alt="Csharp icon" />
            <p className="my-4">C#</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="Python icon" />
            <p className="my-4">PYTHON</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Git} alt="Git icon" />
            <p className="my-4">GIT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
