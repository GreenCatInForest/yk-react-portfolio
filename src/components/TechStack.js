import JsLogo from "../assets/images/tech/icons8-javascript-240.svg";
import ReactLogo from "../assets/images/tech/logo192.png";
import CssLogo from "../assets/images/tech/CSS3_logo.svg";
import TailwindLogo from "../assets/images/tech/tailwind-logo.png";
import BootstrapLogo from "../assets/images/tech/bootstrap-logo.svg";
import MuiLogo from "../assets/images/tech/mui-logo.png";
import FigmaLogo from "../assets/images/tech/Figma-Icon.svg";
import PsLogo from "../assets/images/tech/ps_appicon.svg";

export const TechStack = () => {
  return (
    <div className="techStackComponent" id="frameworks">
      <h3 className="componentTitle">Technologies & Frameworks</h3>
      <div className="techStackItems">
        <img src={JsLogo} alt="JS logo"></img>
        <img src={ReactLogo} alt="React logo" id="ReactLogo"></img>
        <img src={CssLogo} alt="CSS logo"></img>
        <img src={TailwindLogo} alt="Tailwind logo" id="TailwindLogo"></img>
        <img src={BootstrapLogo} alt="Bootstrap logo" id="BootstrapLogo"></img>
        <img src={MuiLogo} alt="MUI logo"></img>
        <img src={FigmaLogo} alt="Figma logo"></img>
        <img src={PsLogo} alt="Photoshop logo"></img>
      </div>
    </div>
  );
};
