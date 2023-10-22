// import bioImg from "../assets/images/logo192.png";
import { SocialMedia } from "./SocialMedia";

export const Hero = () => {
  return (
    <div id="hero">
      <h1>
        Hello, I'm <span>YANA</span>
      </h1>
      <h2>JUNIOR FRONTEND DEVELOPER</h2>
      <img
        // src={bioImg}
        alt="my large avatar"
      />
      <button>Button</button>
      <button>Button</button>
      <SocialMedia />
    </div>
  );
};
