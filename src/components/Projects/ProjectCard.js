import gitImg from "../../assets/images/social/icons8-github-30.png";

export const ProjectCard = (props) => {
  return (
    <div className="projectCard">
      {/* conditional render for banner img */}
      {props.projectBannerImg ? (
        <img src={props.projectBannerImg} alt={props.projectTitle} />
      ) : null}
      <h2 className="projectTitle">{props.projectTitle}</h2>
      <h3 className="projectSubTitle">{props.projectSubTitle}</h3>
      <h4 className="projectDescription">{props.projectDescription}</h4>
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
