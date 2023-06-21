import { Link } from "react-router-dom";

const ProjectInfo = (props) => {
  return (
    <div className="">
      {/* Base Project Image */}
      <img style={{ height: "16rem", width: "32rem" }} src={props.img} />
      {/* Glass Overlay */}
      <div className="hover:backdrop-blur-md">
        {/* Github and website Link */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default ProjectInfo;
