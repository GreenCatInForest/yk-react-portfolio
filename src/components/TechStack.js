import JsLogo from "../assets/images/tech/icons8-javascript-48.png";
import ReactLogo from "../assets/images/tech/logo192.png";
import CssLogo from "../assets/images/tech/icons8-css-48.png";
import TailwindLogo from "../assets/images/tech/tailwind-logo.png";
import BootstrapLogo from "../assets/images/tech/bootstrap-logo.svg";
import MuiLogo from "../assets/images/tech/mui-logo.png";

export const TechStack = () => {
  return (
    <div className="techStackComponent">
      <h3>Technologies & Frameworks</h3>
      <div className="techStackItems">
        <img src={JsLogo} alt="JS logo"></img>
        <img src={ReactLogo} alt="React logo" style={{ width: "48px" }}></img>
        <img src={CssLogo} alt="CSS logo"></img>
        <img
          src={TailwindLogo}
          alt="Tailwind logo"
          style={{ width: "48px" }}
        ></img>
        <img
          src={BootstrapLogo}
          alt="Bootstrap logo"
          style={{ width: "48px" }}
        ></img>
        <img src={MuiLogo} alt="MUI logo" style={{ width: "48px" }}></img>
      </div>
    </div>
  );
};
