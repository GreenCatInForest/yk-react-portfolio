import { ProjectCardContainer } from "../components/Projects/ProjectCardContainer";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="
      flex
      flex-col
      align-middle
      items-center
      text-center
      sm:flex-row
      justify-around"
    >
      <ProjectCardContainer />
    </div>
  );
};
