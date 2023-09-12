import React from "react";
import projectPagePhoto from "../images/blue-sea-landscape.jpg";
import OceanApp from "../images/OceanApp.png";
import Bikes4u from "../images/Bikes-4-u.png";
import ProjectImage from "./ProjectImage";
import C2EZ from "../images/C2EZ-POS.png";
import PasswordGenerator from "../images/PasswordGenerator.png";
import WeatherThingy from "../images/WeatherThingy.png";

const Project = () => {
  return (
    <div className="relative flex align-middle justify-around items-center min-height:calc(100vh - 95px)">
      <div className="relative flex flex-wrap color text-white items-center justify-center pt-6" style={{ backgroundImage: `url(${projectPagePhoto})`, height: "1600px", width: "100%", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <ProjectImage img={OceanApp} SiteLink={"//ocean-buddies.herokuapp.com/"} GitLink={"//github.com/Oceans-4/Ocean-App"} />
        <ProjectImage img={Bikes4u} SiteLink={"//team-a2c2e.github.io/Bikes4U/"} GitLink={"//github.com/Team-A2C2E/Bikes4U"} />
        <ProjectImage img={C2EZ} SiteLink={"//c2ez-pos.herokuapp.com/login"} GitLink={"//github.com/team-C2EZ/c2ez-pos"} />
        <ProjectImage img={PasswordGenerator} SiteLink={"//lordevanelias.github.io/password-generator/"} GitLink={"//github.com/LordEvanElias/password-generator"} />
        <ProjectImage img={WeatherThingy} SiteLink={"//lordevanelias.github.io/weather-checker/"} GitLink={"//github.com/LordEvanElias/weather-checker"} />
      </div>

      <div className="absolute bottom-4 left-4 text-white">
        <h3>Image by kjpargeter on Freepik</h3>
      </div>
    </div>
  );
};

export default Project;
