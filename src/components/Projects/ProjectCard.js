import gitImg from "../../assets/images/social/icons8-github-30.png";

export const ProjectCard = (props) => {
  return (
    <div className="projectCard">
      {/* <img src={props.projectBannerImg} alt={props.projectTitle} /> */}
      <h2>{props.projectTitle}</h2>
      <h3>{props.projectSubTitle}</h3>
      {/* <h4>{props.projectDescription}</h4> */}
      <div className="btn-projectCardContainer">
        <button className="btn-orange">
          <a href={props.projectDeployUrl}>Wiev</a>
        </button>
        <button className="">
          <a href={props.projectGitUrl}>
            <img src={gitImg} alt="logo github" />
          </a>
        </button>
      </div>
    </div>
  );
};
