import { Link } from "react-router-dom";
import placeHolder from "../images/placeHolder.png";

const PhotoInfo = (props) => {
  return (
    <div className="w-3/5 p-5 py-4 relative max-xl:text-center">
      <img style={{ height: "800px", width: "100%" }} src={placeHolder} />
      <p className="m-8 font-light text-white mx-5 max-ex:order-2 max-xl:mx-2">{props.text}</p>
      <Link to={props.link}>
        <button className="bg-[#0B2447] text-white p-4 ">{props.buttonText}</button>
      </Link>
    </div>
  );
};

export default PhotoInfo;
