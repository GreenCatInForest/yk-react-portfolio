import DarkModeImage from "../assets/images/icons8-dark-mode-50.png";

export const DarkMode = () => {
  console.log();
  return (
    <button className="darkModeButton">
      <img src={DarkModeImage} alt="Dark Mode Icon" />
    </button>
  );
};
