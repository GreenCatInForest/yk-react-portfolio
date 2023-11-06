import { ProjectCard } from "./ProjectCard";

let projectDatas = [
  {
    projectBannerImg:
      "../assets/images/lucas-george-wendt-8ZGgg6rhzxs-unsplash.jpg",
    projectTitle: "Counter App",
    projectSubTitle: "Increment, Reset, Decrement the value",
    projectDescription:
      "App created to show an example of using Function and Class Components and a useState hook in React",
    projectDeployUrl: "https://counter-app-react-sigma.vercel.app/",
    projectGitUrl: "https://github.com/GreenCatInForest/counter-app",
  },
  {
    projectBannerImg: "",
    projectTitle: "Title",
    projectSubTitle: "SubTitle",
    projectDescription:
      "App created to show an example of using Function and Class Components and a useState hook in React",
    projectDeployUrl: "https://counter-app-react-sigma.vercel.app/",
    projectGitUrl: "https://github.com/GreenCatInForest/counter-app",
  },
  {
    projectBannerImg: "",
    projectTitle: "Title",
    projectSubTitle: "SubTitle",
    projectDescription:
      "App created to show an example of using Function and Class Components and a useState hook in React",
    projectDeployUrl: "https://counter-app-react-sigma.vercel.app/",
    projectGitUrl: "https://github.com/GreenCatInForest/counter-app",
  },
  {},
];

console.log(projectDatas);

// projectDatas.map((projectData) => ({}))

export const ProjectCardContainer = () => {
  return (
    <div className="projectCardContainer">
      {projectDatas.map((projectData) => {
        return (
          <ProjectCard
            // projectBannerImg={projectData.projectBannerImg}
            projectTitle={projectData.projectTitle}
            projectSubTitle={projectData.projectSubTitle}
            projectDescription={projectData.projectDescription}
            projectDeployUrl={projectData.projectDeployUrl}
            projectGitUrl={projectData.projectGitUrl}
            key={projectData.projectTitle}
          />
        );
      })}
    </div>
  );
};
