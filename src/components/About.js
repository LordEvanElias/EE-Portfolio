import React from "react";
import projectPagePhoto from "../images/breathtaking-scenery-milky-way-italian-alps.jpg";
import placeHolder from "../images/placeHolder.png";
import "./About.module.css";

const About = () => {
  return (
    <div className="relative flex justify-center">
      <img className="max-lg:h-[75rem]" style={{ height: "1250px", width: "100%" }} src={projectPagePhoto} />
      <div className="absolute top-7 mt-4 w-1/2 ">
        <div className=" flex flex-row max-lg:flex-col border border-solid border-white bg-blue-200">
          <img className="max-lg:items-center" style={{ height: "360px", width: "360px" }} src={placeHolder} />

          <div className="border border-solid border-blue-500 text-center flex items-center w-full mt-20 mb-20 align-middle">
            <h1>Hello, my name is Evan Elias. I am a bilingual Full Stack Developer. I am interested in a career working for companies that help the world in some way. </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
