import React from "react";
import projectPagePhoto from "../images/breathtaking-scenery-milky-way-italian-alps.jpg";
import OceanApp from "../images/OceanApp.png";
import Bikes4u from "../images/Bikes-4-u.png";

const Project = () => {
  return (
    <div className="relative flex justify-center ">
      <img className="max-lg:h-[75rem]" style={{ height: "1250px", width: "100%" }} src={projectPagePhoto} />

      <div className=" absolute top-7 mt-4 ">
        <div className="flex flex-wrap max-lg:flex-col justify-around ">

          <div className="p-2">
            <img className="max-lg:h-[25rem]" style={{ height: "16rem", width: "32rem" }} src={OceanApp} />
          </div>

          <div className="p-2">
            <img className="max-lg:h-[25rem]" style={{ height: "16rem", width: "32rem" }} src={Bikes4u} />
          </div>

          <div className="p-2">
            <img className="max-lg:h-[25rem]" style={{ height: "16rem", width: "32rem" }} src={OceanApp} />
          </div>

          <div className="p-2">
            <img className="max-lg:h-[25rem]" style={{ height: "16rem", width: "32rem" }} src={Bikes4u} />
          </div>

          <div className="p-2">
            <img className="max-lg:h-[25rem]" style={{ height: "16rem", width: "32rem" }} src={OceanApp} />
          </div>

          <div className="p-2">
            <img className="max-lg:h-[25rem]" style={{ height: "16rem", width: "32rem" }} src={Bikes4u} />
          </div>
        </div>
      </div>
      <div className=" absolute bottom-4 text-white">
        <h3>Image by wirestock on Freepik</h3>
      </div>
    </div>
  );
};

export default Project;
