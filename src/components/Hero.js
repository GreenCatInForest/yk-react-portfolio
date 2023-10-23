import bioImg from "../assets/images/Untitled3.png";
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
        <button className="bg-orange-600 hover:bg-orange-400 text-white border border-orange-700 w-40 h-10 rounded-full m-1">
          Projects
        </button>
        <button className="bg-orange-400 hover:bg-orange-600 text-white border border-orange-700 w-40 h-10 rounded-full m-1">
          CV
        </button>
        <SocialMedia />
      </article>
      <img src={bioImg} alt="my large avatar" className="w-2/5" />
    </div>
  );
};
