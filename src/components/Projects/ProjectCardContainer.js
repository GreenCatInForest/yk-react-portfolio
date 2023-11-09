import { ProjectCard } from "./ProjectCard";

let projectDatas = [
  {
    projectBannerImg: "",
    projectTitle: "Happy & Healthy Recipes",
    projectSubTitle:
      "Recipe Search App. Make your own collection of recipes with calories and nutrition value.",
    projectDescription:
      "Interactive app for people to search for an ingredient and choose recipies they can save and come back later.",
    projectDeployUrl: "https://recipe-search-app-lovat.vercel.app/",
    projectGitUrl: "https://github.com/GreenCatInForest/recipe-search-app",
  },
  {
    projectBannerImg: "",
    projectTitle: "Counter App",
    projectSubTitle:
      "This interactive app allows the user to increment, reset and decrement counter values",
    projectDescription:
      "App created to show an example of using Function and Class Components and a useState hook in React",
    projectDeployUrl: "https://counter-app-react-sigma.vercel.app/",
    projectGitUrl: "https://github.com/GreenCatInForest/counter-app",
  },
  {
    projectBannerImg: "",
    projectTitle: "Word Counter App",
    projectSubTitle:
      "The app allows to count the number of words in a given snippet of text",
    projectDescription:
      "The user can type or insert a text and the word counter updates dynamically based on the number of words in the textarea",
    projectDeployUrl: "https://word-counter-app-omega.vercel.app",
    projectGitUrl: "https://github.com/GreenCatInForest/word-counter-app",
  },
  {},
];

console.log(projectDatas);

// projectDatas.map((projectData) => ({}))

export const ProjectCardContainer = () => {
  return (
    <div className="projectCardContainer">
      {projectDatas.map((projectData) => {
        //  conditional render for projectCardTitle
        return projectData.projectTitle ? (
          <ProjectCard
            projectBannerImg={projectData.projectBannerImg}
            projectTitle={projectData.projectTitle}
            projectSubTitle={projectData.projectSubTitle}
            projectDescription={projectData.projectDescription}
            projectDeployUrl={projectData.projectDeployUrl}
            projectGitUrl={projectData.projectGitUrl}
            key={projectData.projectTitle}
          />
        ) : null;
      })}
    </div>
  );
};
