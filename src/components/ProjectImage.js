import React from "react";
import Github from "../images/github-mark-white.png";
import WebLink from "../images/external-link.png";
import { Link } from "react-router-dom";

function ExternalLink({ to, children, ...props }) {
  return (
    <Link to={{ pathname: to }} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </Link>
  );
}

const ProjectImage = (props) => {
  return (
    <div className="text-white" style={{ height: "18rem", width: "34rem" }}>
      {/* Base Project Image */}

      <div className="flex items-center justify-around flex-wrap ">
        <img className="img-source" style={{ height: "16rem", width: "32rem" }} src={props.img} alt="" />

        {/* Github and website Link */}
        <div className="absolute flex flex-wrap flex-row">
          <ExternalLink to="//github.com/LordEvanElias">
            <img className="flex self-center p-1 m-4 hover:p-2" src={WebLink} style={{ height: "5rem" }} alt="LinkedIn-logo" />
          </ExternalLink>

          <ExternalLink to="//github.com/LordEvanElias">
            <img className="flex self-center p-1 m-4 hover:p-2" src={Github} style={{ height: "5rem" }} alt="github-logo" />
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectImage;
