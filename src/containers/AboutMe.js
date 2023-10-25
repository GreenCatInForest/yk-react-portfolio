import { Bio } from "../components/Bio";
import { TechStack } from "../components/TechStack";

export const AboutMe = () => {
  return (
    <div id="about">
      <h2 className="containerTitleH2">About Me</h2>
      <Bio />
      <TechStack />
      <h3>Education</h3>
      <h3>Testmonials</h3>
    </div>
  );
};
