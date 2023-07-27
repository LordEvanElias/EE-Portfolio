import React from "react";
import projectPagePhoto from "../images/breathtaking-scenery-milky-way-italian-alps.jpg";
import OceanApp from "../images/OceanApp.png";
import Bikes4u from "../images/Bikes-4-u.png";
import ProjectImage from "./ProjectImage";

const Project = () => {
  return (
    <div className="relative flex justify-around ">
      <img className="max-lg:h-[75rem]" style={{ height: "1250px", width: "100%" }} src={projectPagePhoto} />

      <div className="absolute flex flex-wrap align-middle  ">
        <ProjectImage img={OceanApp} />
        <ProjectImage img={Bikes4u} />
      </div>

      <div className="absolute bottom-4 text-white">
        <h3>Image by wirestock on Freepik</h3>
      </div>
    </div>
  );
};

export default Project;
