import bioImg from "../assets/images/Untitled3.png";
import { SocialMedia } from "./SocialMedia";

export const Hero = () => {
  return (
    <div
      className="containerComponent hero"
    >
      <article className="heroArticle">
        <h1 className="text-5xl font-bold">
          Hello, I'm <span className="text-5xl font-bold">YANA</span>
        </h1>
        <h2>Junior Frontend Developer</h2>
        <button className="btn-orange">Projects</button>
        <button className="btn-orange">CV</button>
        <SocialMedia />
      </article>
      <img src={bioImg} alt="my large avatar" className="heroImage" />
    </div>
  );
};
