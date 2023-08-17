import { Link } from "react-router-dom";

const TextInfo = (props) => {
  return (
    <div className="w-3/5 flex flex-col items-center">
      <h1 className="font-bold text-5xl text-[#ebeef1] mx-2 max-ex:order-1">{props.title}</h1>
      <h1 className="m-8 text-white mx-5 max-ex:order-2 max-xl:mx-2 font-bold">{props.text}</h1>
      <Link to={props.link}>
        <button className="bg-[#0B2447] text-white p-4 ">{props.buttonText}</button>
      </Link>
    </div>
  );
};

export default TextInfo;
