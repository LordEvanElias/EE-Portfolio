import React from "react";
import Github from "../images/github-mark-white.png";
import LinkedIn from "../images/linkedin-64.png";

function Revisible() {
  const logos = document.querySelector(".logos");

  if (props === "invisible") {
    return (props = "visible");
  }
}

const ProjectImage = () => {
  return (
    <div className="text-white" style={{ height: "18rem", width: "34rem" }}>
      {/* Base Project Image */}
      <div className="hover:blur-md flex items-center justify-around ">
        <img className="img-source" style={{ height: "16rem", width: "32rem" }} src={props.img} alt="" />

        {/* Github and website Link */}
        <div className=" logos absolute flex flex-wrap flex-row invisible">
          <img className=" flex self-center p-1 m-4 z-10 " src={LinkedIn} style={{ height: "5rem" }} alt="linkedin-logo" />
          <img className=" flex self-center p-1 m-4 z-10 " src={Github} style={{ height: "5rem" }} alt="github-logo" />
        </div>
      </div>
    </div>
  );
};

export default ProjectImage;
