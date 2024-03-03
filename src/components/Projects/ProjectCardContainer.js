import { ProjectCard } from "./ProjectCard";
import happyRecipesProjectBannerImg from "../../assets/images/projectBannerImg/happyHealthyRecipesCardBanner.png";
import wordCounterProjectBannerImg from "../../assets/images/projectBannerImg/wordCounterCardBanner.png";
import counterProjectBannerImg from "../../assets/images/projectBannerImg/counterCardBanner.png";
import loginAppProjectCardBannerImg from "../../assets/images/projectBannerImg/loginAppProjectCardBanner.png";
import githubSerchProjectCardBannerImg from "../../assets/images/projectBannerImg/githubSerchProjectCardBannerImg.png";
import findYourJsChallengeBannerImg from "../../assets/images/projectBannerImg/findYourJsChallengeBannerImg.png";
import JSShowcastProjectCardBannerImg from "../../assets/images/projectBannerImg/JSShowcastProjectCardBannerImg.png";

let projectDatas = [
  {
    projectBannerImg: happyRecipesProjectBannerImg,
    projectTitle: "Happy & Healthy Recipes",
    projectSubTitle:
      "Recipe Search App. Make your own collection of recipes with calories and nutrition value.",
    projectDescription:
      "Interactive app for people to search for an ingredient and choose recipies they can save and come back later.",
    projectDeployUrl: "https://recipe-search-app-lovat.vercel.app/",
    projectGitUrl: "https://github.com/GreenCatInForest/recipe-search-app",
  },
  {
    projectBannerImg: githubSerchProjectCardBannerImg,
    projectTitle: "GitHub Search App",
    projectSubTitle: "The app allows user to find any repo",
    projectDescription:
      "This interactive app allows the user to enter a name of organisation or a username and to receive a list of related Github repositories. App created to show an example of using Fetch API, a useState and useEffect hooks in React.",
    projectDeployUrl: "https://search-github-repos-app.vercel.app/",
    projectGitUrl:
      "https://github.com/GreenCatInForest/search-github-repos-app",
  },
  {
    projectBannerImg: findYourJsChallengeBannerImg,
    projectTitle: "Search JavaScript Challenges App",
    projectSubTitle:
      "This interactive app allows user to find modern JavaScript challenges",
    projectDescription:
      "App created to help users to find modern JavaScript challenges. The user can type a keyword and the app will show a list of related challenges. App created to show an example of using data.json, a useState and useEffect hooks in React.",
    projectDeployUrl: "https://choose-your-challenge-app.vercel.app/",
    projectGitUrl:
      "https://github.com/GreenCatInForest/choose-your-challenge-app",
  },
  {
    projectBannerImg: counterProjectBannerImg,
    projectTitle: "Counter App",
    projectSubTitle:
      "This interactive app allows the user to increment, reset and decrement counter values",
    projectDescription:
      "App created to show an example of using Function and Class Components and a useState hook in React",
    projectDeployUrl: "https://counter-app-react-sigma.vercel.app/",
    projectGitUrl: "https://github.com/GreenCatInForest/counter-app",
  },
  {
    projectBannerImg: wordCounterProjectBannerImg,
    projectTitle: "Word Counter App",
    projectSubTitle:
      "The app allows to count the number of words in a given snippet of text",
    projectDescription:
      "The user can type or insert a text and the word counter updates dynamically based on the number of words in the textarea",
    projectDeployUrl: "https://word-counter-app-omega.vercel.app",
    projectGitUrl: "https://github.com/GreenCatInForest/word-counter-app",
  },
  {
    projectBannerImg: loginAppProjectCardBannerImg,
    projectTitle: "Login App",
    projectSubTitle: "The app allows user to login to the app with validation",
    projectDescription:
      "The user can type a login and a password, the generated page is dynamically updated. In case of error the app throws an alert",
    projectDeployUrl: "https://login-app-khaki-sigma.vercel.app",
    projectGitUrl: "https://github.com/GreenCatInForest/login-app",
  },
  {
    projectBannerImg: loginAppProjectCardBannerImg,
    projectTitle: "Login App",
    projectSubTitle: "The app allows user to login to the app with validation",
    projectDescription:
      "The user can type a login and a password, the generated page is dynamically updated. In case of error the app throws an alert",
    projectDeployUrl: "https://login-app-khaki-sigma.vercel.app",
    projectGitUrl: "https://github.com/GreenCatInForest/login-app",
  },
  {
    projectBannerImg: JSShowcastProjectCardBannerImg,
    projectTitle: "Pure JavaScript, CSS and HTML",
    projectSubTitle:
      "The app shows the list of JS challenges and some fancy animations",
    projectDescription:
      "The user can see an example of using pure JavaScript, CSS and HTML to create a list of challenges and animations",
    projectDeployUrl: "https://greencatinforest.github.io/showcase-pure-js/",
    projectGitUrl: "https://github.com/GreenCatInForest/showcase-pure-js",
  },
];

console.log(projectDatas);

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
