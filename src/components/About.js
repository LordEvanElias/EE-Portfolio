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
            <h1>
              Evan Elias is a Full Stack developer who recently finished his extensive bootcamp at Northwestern University. He is familiar with the basic HTML, CSS, JavaScript and even React, MongoDB, MYSQL2, and more. He hopes to join a company that makes a positive difference in the world and to pursue a lifelong career in web development and coding. He enjoys playing video games, reading, and travelling in his free time. He has travelled all over the world and even lived in Japan. He is
              fluent in Japanese as well. He is a hard worker and a fast learner. He is always looking for new challenges and opportunities to grow and learn.
            </h1>
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
