import React from "react";
import projectPagePhoto from "../images/breathtaking-scenery-milky-way-italian-alps.jpg";
import placeHolder from "../images/placeHolder.png";

const About = () => {
  return (
    <div className="relative flex justify-center">
      <div className="absolute top-7">
        <img className="max-lg:h-[75rem]" style={{ height: "1250px", width: "100%" }} src={projectPagePhoto} />

        <div className=" justify-center">
          <img className="max-lg:h-[75rem]" style={{ height: "640px", width: "360px" }} src={placeHolder} />
          <h1>Here is text</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
