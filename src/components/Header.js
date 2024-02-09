import { useState } from "react";

import { NavHumburgerMenu } from "./NavHumbergerMenu";

import DarkModeImage from "../assets/images/icons8-dark-mode-50.png";
import LightModeImage from "../assets/images/icons8-light-mode-50.png";
import CVDocument from "../assets/downloads/CV_Front_End_Developer_Engineer.pdf";

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
      <a href="/">
        <h1 id="headerTitle">YK</h1>
      </a>
      <NavHumburgerMenu
        className={`${
          darkMode ? "darkModeHumburgerMenu" : "lightModeHumburgerMenu"
        }`}
        darkMode={darkMode}
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
        <a href={CVDocument} target="_blank" rel="noopener noreferrer">
          Download CV
        </a>
      </button>
    </div>
  );
};
