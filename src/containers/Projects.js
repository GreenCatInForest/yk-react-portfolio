import { ProjectCardContainer } from "../components/Projects/ProjectCardContainer";

export const Projects = () => {
  return (
    <div id="projects" className="containerProjects">
      <h2 className="text-2xl font-bold">Projects -&gt;</h2>
      {/* <h3 className="containerTitleH2">Here they are</h3> */}
      <ProjectCardContainer />
    </div>
  );
};
