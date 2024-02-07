import { useState } from "react";
import { NavHumburgerMenu } from "./NavHumbergerMenu";
import DarkModeImage from "../assets/images/icons8-dark-mode-50.png";
import LightModeImage from "../assets/images/icons8-light-mode-50.png";

export const Header = ({ setDarkMode, darkMode }) => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    !hamburgerMenuIsOpen
      ? setHamburgerMenuIsOpen(true)
      : setHamburgerMenuIsOpen(false);
    console.log(hamburgerMenuIsOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      id="header"
      className={`headerNav ${darkMode ? "darkMode" : "lightMode"}`}
    >
      <h1 id="headerTitle" className="text-3xl font-bold">
        YK
      </h1>
      <NavHumburgerMenu
        className={`${darkMode ? "darkMode" : "lightMode"}`}
        toggleHamburgerMenu={toggleHamburgerMenu}
        hamburgerMenuIsOpen={hamburgerMenuIsOpen}
      />
      <button className="darkModeButton" onClick={toggleDarkMode}>
        {!darkMode ? (
          <img src={DarkModeImage} alt="Dark Mode Icon" />
        ) : (
          <img src={LightModeImage} alt="Light Mode Icon" />
        )}
      </button>
      <button className="btn-orange">
        <a href="#downloadCv">Download CV</a>
      </button>
    </div>
  );
};
