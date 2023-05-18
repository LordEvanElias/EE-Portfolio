import { Link } from "react-router-dom";

const TextInfo = (props) => {
  return (
    <div className="w-3/5 p-5 py-4 flex flex-col items-center">
      <h1 className="font-bold text-5xl text-[#ebeef1] mx-2 max-ex:order-1">{props.title}</h1>
      <p className="m-8 font-light text-white mx-5 max-ex:order-2 max-xl:mx-2">{props.text}</p>
      <Link to={props.link}>
        <button className="bg-[#0B2447] text-white p-4 ">{props.buttonText}</button>
      </Link>
    </div>
  );
};

export default TextInfo;
