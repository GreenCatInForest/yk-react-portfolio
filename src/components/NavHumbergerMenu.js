export const NavHumburgerMenu = ({
  toggleHamburgerMenu,
  hamburgerMenuIsOpen,
  darkMode,
}) => {
  if (!hamburgerMenuIsOpen && !darkMode) {
    return (
      <button
        onClick={toggleHamburgerMenu}
        className="text-3xl cursor-pointer relative w-8 h-8"
      >
        <div className="hamburgerMenuOpen"></div>
      </button>
    );
  } else if (!hamburgerMenuIsOpen && darkMode) {
    return (
      <button
        onClick={toggleHamburgerMenu}
        className="text-3xl cursor-pointer relative w-8 h-8"
      >
        <div className="hamburgerMenuOpenDarkMode"></div>
      </button>
    );
  } else if (hamburgerMenuIsOpen && !darkMode) {
    return (
      <nav id="headerNav">
        <ul className="headerNavContainer">
          <li className="headerNavLink">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <button
            onClick={toggleHamburgerMenu}
            className="hamburgerMenuClose text-3xl cursor-pointer relative w-8 h-8"
          ></button>
        </ul>
      </nav>
    );
  } else if (hamburgerMenuIsOpen && darkMode) {
    return (
      <nav id="headerNav">
        <ul className="headerNavContainer">
          <li className="headerNavLink">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <button
              onClick={toggleHamburgerMenu}
              className="hamburgerMenuCloseDarkMode text-3xl cursor-pointer relative w-8 h-8"
            ></button>
          </li>
        </ul>
      </nav>
    );
  }
};
