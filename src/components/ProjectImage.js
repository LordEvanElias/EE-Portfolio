import React from "react";

const ProjectImage = (props) => {
  return (
    <div className="static flex text-white bg-sky-950 items-center pl-4" style={{ height: "18rem", width: "34rem" }}>
      {/* Base Project Image */}
      <img className="img-source flex  " style={{ height: "16rem", width: "32rem" }} src={props.img} alt="" />
      {/* Glass Overlay */}
      <div className="hover:backdrop-blur-md">
        {/* Github and website Link */}
        <div className="git-web-link"></div>
      </div>
    </div>
  );
};

export default ProjectImage;
