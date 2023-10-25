import fbImg from "../assets/images/social/icons8-facebook-30.png";
import gitImg from "../assets/images/social/icons8-github-30.png";
import lnkdlnImg from "../assets/images/social/icons8-linkedin-30.png";
import wtspImg from "../assets/images/social/icons8-whatsapp-30.png";

export const SocialMedia = () => {
  return (
    <div className="socialMedia">
      <a href="#">
        <img src={fbImg} alt="logo facebook" />
      </a>
      <a href="#">
        <img src={gitImg} alt="logo github" />
      </a>
      <a href="#">
        {" "}
        <img src={lnkdlnImg} alt="logo linkedin" />
      </a>
      <a href="#">
        <img src={wtspImg} alt="logo whatsapp" />
      </a>
    </div>
  );
};
