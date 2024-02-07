import { useState } from "react";
import { NavHumburgerMenu } from "./NavHumbergerMenu";

export const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    !hamburgerMenuIsOpen
      ? setHamburgerMenuIsOpen(true)
      : setHamburgerMenuIsOpen(false);
    console.log(hamburgerMenuIsOpen);
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
      <button className="btn-orange">
        <a href="#downloadCv">Download CV</a>
      </button>
    </div>
  );
};
