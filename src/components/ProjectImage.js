import React from "react";

const ProjectImage = (props) => {
  return (
    <div className="absolute text-white">
      {/* Base Project Image */}
      <img className="project-image" style={{ height: "16rem", width: "32rem" }} src={props.image} alt="image" />
      {/* Glass Overlay */}
      <div className="hover:backdrop-blur-md">
        {/* Github and website Link */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default ProjectImage;
