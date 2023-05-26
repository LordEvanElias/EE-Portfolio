import React from "react";
import projectPagePhoto from "../images/breathtaking-scenery-milky-way-italian-alps.jpg";

const Project = () => {
  return (
    <div className="relative flex justify-center ">
      <img className="max-lg:h-[75rem]" style={{ height: "1250px", width: "100%" }} src={projectPagePhoto} />

      <div className=" absolute top-7 mt-4 ">
        <div className="flex flex-wrap max-lg:flex-col ">
          <div className="justify-center">
            <div className="w-64 h-32 bg-blue-300 m-5"></div>
          </div>

          <div className="">
            <div className="w-64 h-32 bg-blue-300 m-5"></div>
          </div>

          <div className="">
            <div className="w-64 h-32 bg-blue-300 m-5"></div>
          </div>

          <div className="">
            <div className="w-64 h-32 bg-blue-300 m-5"></div>
          </div>

          <div className="">
            <div className="w-64 h-32 bg-blue-300 m-5"></div>
          </div>

          <div className="">
            <div className="w-64 h-32 bg-blue-300 m-5"></div>
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
