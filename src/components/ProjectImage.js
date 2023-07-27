import React from "react";
import Github from "../images/github-mark-white.png";

const ProjectImage = (props) => {
  return (
    <div className=" text-white" style={{ height: "18rem", width: "34rem" }}>
      {/* Base Project Image */}
      <div className="hover:blur-md">
        <img className="img-source" style={{ height: "16rem", width: "32rem" }} src={props.img} alt="" />

        {/* Github and website Link */}
        <img className="flex flex-row " src={Github} style={{ height: "5rem" }} alt="github-logo" />
      </div>
    </div>
  );
};

export default ProjectImage;