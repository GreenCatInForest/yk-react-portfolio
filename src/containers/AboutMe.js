import { Bio } from "../components/Bio";
import { TechStack } from "../components/TechStack";

export const AboutMe = () => {
  return (
    <div id="about" className="containerAboutMe">
      <h2 className="containerTitleH2">About Me</h2>
      <Bio />
      <TechStack />
    </div>
  );
};
