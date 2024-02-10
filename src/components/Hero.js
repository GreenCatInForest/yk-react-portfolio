import { SocialMedia } from "./SocialMedia";

// import bioImg from "../assets/images/Untitled3.png";
import bioImg from "../assets/images/Group11.png";
// import bioImg from "../assets/images/Group3.png";

import CVDocument from "../assets/downloads/CV_Front_End_Developer_Engineer.pdf";

export const Hero = () => {
  return (
    <div className="hero ">
      <article className="heroArticle">
        <h1 className="text-5xl font-bold">
          Hello, I'm <span className="text-5xl font-bold">YANA</span>
        </h1>
        <h2>Junior Frontend Developer</h2>
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
    </div>
  );
};
