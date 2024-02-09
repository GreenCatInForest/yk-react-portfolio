export const NavHumburgerMenu = ({
  toggleHamburgerMenu,
  hamburgerMenuIsOpen,
  darkMode,
}) => {
  if (!hamburgerMenuIsOpen && !darkMode) {
    return (
      <button onClick={toggleHamburgerMenu} className="navHumburgerMenuRow">
        <div className="hamburgerMenuOpen"></div>
      </button>
    );
  } else if (!hamburgerMenuIsOpen && darkMode) {
    return (
      <button onClick={toggleHamburgerMenu} className="navHumburgerMenuRow">
        <div className="hamburgerMenuOpenDarkMode"></div>
      </button>
    );
  } else if (hamburgerMenuIsOpen && !darkMode) {
    return (
      <nav id="headerNav">
        <ul className="headerNavContainer">
          <li className="headerNavLink">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#frameworks">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <button
            onClick={toggleHamburgerMenu}
            className="hamburgerMenuClose navHumburgerMenuRow"
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
              className="hamburgerMenuCloseDarkMode navHumburgerMenuRow"
            ></button>
          </li>
        </ul>
      </nav>
    );
  }
};
