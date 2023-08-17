import React from "react";
import projectPagePhoto from "../images/breathtaking-scenery-milky-way-italian-alps.jpg";
import placeHolder from "../images/placeHolder.png";
import "./About.module.css";
import certificate from "../images/certificate.png";

const About = () => {
  return (
    <div className="relative flex justify-center">
      <img className="max-lg:h-[75rem]" style={{ height: "1250px", width: "100%" }} src={projectPagePhoto} />
      <div className="absolute top-7 mt-4 w-1/2 ">
        <div className=" flex flex-row max-lg:flex-col max-lg:items-center border border-solid border-white backdrop-blur-sm">
          <img style={{ height: "360px", width: "360px" }} src={placeHolder} />

          <div className="max-lg:pt-3 max-lg:pb-3 border border-transparent  text-center text-white p-3 font-bold flex items-center w-full  align-middle">
            <h1>Hello, my name is Evan Elias. I am a bilingual Full Stack Developer. I am interested in a career working for companies that help the world in some way. </h1>
          </div>
        </div>

        <div className="relative flex place-content-center pt-10 ">
          <img style={{ height: "528px", width: "814px" }} src={certificate} />
        </div>

      </div>
      <div className="absolute bottom-4 left-4 text-white">
        <h3>Image by wirestock on Freepik</h3>
      </div>
    </div>
  );
};

export default About;
