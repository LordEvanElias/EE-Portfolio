import React from "react";
import projectPagePhoto from "../images/breathtaking-scenery-milky-way-italian-alps.jpg";

const Home = () => {
  return (
    <div className="relative">
      <img className="max-lg:h-[75rem]" style={{ height: "1250px", width: "100%" }} src={projectPagePhoto} />

      <div className=" absolute top-7 mt-4 w-fullflex flex-wrap flex-row justify-center ">
        <div className="flex justify-between align-middle max-lg:flex-col max-lg:justify-center">
          <div className="flex flex-col items-center justify-center pr-10 max-lg:pr-0 max-lg:pb-20">
            <div className="w-64 h-32 bg-blue-300 m-5"></div>
          </div>

          <div className="flex flex-col items-center justify-center pr-10 max-lg:pr-0 max-lg:pb-20">
            <div className="w-64 h-32 bg-blue-300 m-5"></div>
          </div>

          <div className="flex flex-col items-center justify-center pr-10 max-lg:pr-0 max-lg:pb-20">
            <div className="w-64 h-32 bg-blue-300 m-5"></div>
          </div>

          <div className="flex flex-col items-center justify-center pr-10 max-lg:pr-0 max-lg:pb-20">
            <div className="w-64 h-32 bg-blue-300 m-5"></div>
          </div>

          <div className="flex flex-col items-center justify-center pr-10 max-lg:pr-0 max-lg:pb-20">
            <div className="w-64 h-32 bg-blue-300 m-5"></div>
          </div>

          <div className="flex flex-col items-center justify-center pr-10 max-lg:pr-0 max-lg:pb-20">
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

export default Home;
