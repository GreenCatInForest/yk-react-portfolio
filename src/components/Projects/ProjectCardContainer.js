import { ProjectCard } from "./ProjectCard";

export const ProjectCardContainer = () => {
  return (
    <div
      className="
    flex
    flex-col
    align-middle
    items-center
    text-center
    sm:flex-row
    gap-8"
    >
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};
