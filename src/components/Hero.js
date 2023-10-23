// import bioImg from "../assets/images/logo192.png";
import { SocialMedia } from "./SocialMedia";

export const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col align-middle items-center text-center sm:flex-row justify-around"
    >
      <article className="flex flex-col align-middle items-center text-center gap-2">
        <h1 className="text-2xl font-bold">
          Hello, I'm <span className="text-3xl font-bold">YANA</span>
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

      <article>
        <img
          // src={bioImg}
          alt="my large avatar"
        />
      </article>
    </div>
  );
};
