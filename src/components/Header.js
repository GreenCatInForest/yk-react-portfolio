import { useState } from "react";
import { NavHumburgerMenu } from "./NavHumbergerMenu";
import DarkModeImage from "../assets/images/icons8-dark-mode-50.png";

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
    console.log(darkMode);
  };

  return (
    <div id="header" className="headerNav">
      <h1 id="headerTitle" className="text-3xl font-bold">
        YK
      </h1>
      <NavHumburgerMenu
        toggleHamburgerMenu={toggleHamburgerMenu}
        hamburgerMenuIsOpen={hamburgerMenuIsOpen}
      />
      <button className="darkModeButton" onClick={toggleDarkMode}>
        <img src={DarkModeImage} alt="Dark Mode Icon" />
      </button>
      <button className="btn-orange">
        <a href="#downloadCv">Download CV</a>
      </button>
    </div>
  );
};
