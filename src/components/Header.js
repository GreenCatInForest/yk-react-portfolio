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

      <NavHumburgerMenu hamburgerMenuIsOpen={hamburgerMenuIsOpen} />

      <button
        onClick={toggleHamburgerMenu}
        id="toggleBtnMenu"
        className="text-3xl cursor-pointer relative w-8 h-8"
      >
        <div
          id="hamburgerMenu"
          className="bg-black w-8 h-1 rounded
          absolute top-4 -mt-.5
          transition-all duration-700
          before:content-''
          before:bg-black
          before:w-8
          before:h-1
          before:rounded
          before:absolute
          before:-translate-x-4
          before:-translate-y-3
          before:transition-all
          before:duration-700
          after: content-''
          after:bg-black
          after:w-8
          after:h-1
          after:rounded
          after:absolute
          after:-translate-x-4
          after:translate-y-3
          after:transition-all
          after:duration-700
"
        ></div>
      </button>
      <button className="btn-orange">
        <a href="#downloadCv">Download CV</a>
      </button>
    </div>
  );
};
