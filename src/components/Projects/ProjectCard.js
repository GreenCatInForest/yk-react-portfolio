import gitImg from "../../assets/images/social/icons8-github-30.png";

export const ProjectCard = () => {
  return (
    <div className="projectCard">
      <img src="#" alt="project banner" />
      <h2>Title</h2>
      <h3>Subtitle</h3>
      <div className="btn-projectCardContainer">
        <button className="btn-orange">
          <a href="#">Wiev</a>
        </button>
        <button className="">
          <a href="#">
            <img src={gitImg} alt="logo github" />
          </a>
        </button>
      </div>
    </div>
  );
};
