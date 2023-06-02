import React from "react";
import projectPagePhoto from "../images/breathtaking-scenery-milky-way-italian-alps.jpg";
import placeHolder from "../images/placeHolder.png";

const About = () => {
  return (
    <div className="relative flex justify-center">
      <img className="max-lg:h-[75rem]" style={{ height: "1250px", width: "100%" }} src={projectPagePhoto} />
      <div className="absolute top-7 mt-4 w-fit ">
        <div className=" flex flex-row border border-solid border-white bg-blue-200">
          <img className="max-lg:h-[75rem] mt-5 mb-5 ml-5" style={{ height: "640px", width: "360px" }} src={placeHolder} />

          <div className=" border border-solid border-blue-500">
            <h1>Here is text</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
