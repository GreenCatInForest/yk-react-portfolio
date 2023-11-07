import fbImg from "../assets/images/social/icons8-facebook-30.png";
import gitImg from "../assets/images/social/icons8-github-30.png";
import lnkdlnImg from "../assets/images/social/icons8-linkedin-30.png";
import wtspImg from "../assets/images/social/icons8-whatsapp-30.png";

export const SocialMedia = () => {
  return (
    <div className="socialMedia">
      {/* <a href="https://www.facebook.com/profile.php?id=100072930447106">
        <img src={fbImg} alt="logo facebook" />
      </a> */}
      <a href="https://github.com/GreenCatInForest">
        <img src={gitImg} alt="logo github" />
      </a>
      <a href="https://www.linkedin.com/in/yana-kozarenko-237ba5191/">
        <img src={lnkdlnImg} alt="logo linkedin" />
      </a>
      <a href="https://wa.me/447285643593">
        <img src={wtspImg} alt="logo whatsapp" />
      </a>
    </div>
  );
};
