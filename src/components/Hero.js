import bioImg from "../assets/images/SmartBlur.png";
import { SocialMedia } from "./SocialMedia";

export const Hero = () => {
  return (
    <div
      id="hero"
      className="w-11/12 flex flex-col align-middle items-center sm:items-center text-center sm:flex-row"
    >
      <article className="w-3/5 flex flex-col align-middle items-center text-center gap-3 mt-40">
        <h1 className="text-3xl font-bold">
          Hello, I'm <span className="text-4xl font-bold">YANA</span>
        </h1>
        <h2>Junior Frontend Developer</h2>
        <button className="btn-orange">Projects</button>
        <button className="btn-orange">CV</button>
        <SocialMedia />
      </article>
      <img src={bioImg} alt="my large avatar" className="w-2/5" />
    </div>
  );
};
