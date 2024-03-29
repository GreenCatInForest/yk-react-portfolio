import { SocialMedia } from "./SocialMedia";

// import bioImg from "../assets/images/Untitled3.png";
// import bioImg from "../assets/images/Group11.png";
import bioImg from "../assets/images/Group3.png";
import JsLogo from "../assets/images/tech/icons8-javascript-240.svg";
import ReactLogo from "../assets/images/tech/logo192.png";
import CVDocument from "../assets/downloads/CV_Front_End_Developer_Engineer.pdf";

export const Hero = () => {
  return (
    <div className="hero ">
      <article className="heroArticle">
        <h1 className="text-5xl font-bold">
          Hello, I'm <span className="text-5xl font-bold">YANA</span>
        </h1>
        <h2>Aspiring JS & React Developer</h2>
        <button className="btn-orange">
          <a href="#projects">Projects</a>
        </button>
        <button className="btn-orange">
          <a href={CVDocument} download>
            CV
          </a>
        </button>
        <SocialMedia />
      </article>
      <img src={bioImg} alt="my large avatar" className="heroImage" />
      <div className="heroLogoContainer">
        <img src={JsLogo} alt="JS logo near the avatar" id="heroJSLogo" />
        <img
          src={ReactLogo}
          alt="React logo near the avatar"
          id="heroReactLogo"
        />
      </div>
    </div>
  );
};
