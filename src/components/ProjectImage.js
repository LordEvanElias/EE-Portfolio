import React from "react";
import Github from "../images/github-mark-white.png";
import LinkedIn from "../images/linkedin-64.png";


const ProjectImage = (props) => {
  return (
    <div className="text-white" style={{ height: "18rem", width: "34rem" }}>
      {/* Base Project Image */}

      <div className="flex items-center justify-around flex-wrap">
        <img className="img-source" style={{ height: "16rem", width: "32rem" }} src={props.img} alt="" />

        {/* Github and website Link */}
        <div className="absolute flex flex-wrap flex-row">
          <img className="flex self-center p-1 m-4 hover:p-2" src={LinkedIn} style={{ height: "5rem" }} alt="linkedin-logo" />

          <img className="flex self-center p-1 m-4 hover:p-2 " src={Github} style={{ height: "5rem" }} alt="github-log" />
        </div>
      </div>
    </div>
  );
};

export default ProjectImage;
