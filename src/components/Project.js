import React from "react";
import projectPagePhoto from "../images/blue-sea-landscape.jpg";
import OceanApp from "../images/OceanApp.png";
import Bikes4u from "../images/Bikes-4-u.png";
import ProjectImage from "./ProjectImage";
import C2EZ from "../images/C2EZ-POS.png";
import PasswordGenerator from "../images/PasswordGenerator.png";
import WeatherThingy from "../images/WeatherThingy.png";

const Project = () => {
  return (
    <div className="relative flex align-middle justify-around items-center ">
      <img className="max-lg:h-[75rem]" style={{ height: "1250px", width: "100%" }} src={projectPagePhoto} />

      <div className="absolute flex flex-wrap color text-white items-center place-content-center ">
        <ProjectImage img={OceanApp} />
        <ProjectImage img={Bikes4u} />
        <ProjectImage img={C2EZ} />
        <ProjectImage img={PasswordGenerator} />
        <ProjectImage img={WeatherThingy} />
      </div>

      <div className="absolute bottom-4 left-4 text-white">
        <h3>Image by kjpargeter on Freepik</h3>
      </div>
    </div>
  );
};

export default Project;
