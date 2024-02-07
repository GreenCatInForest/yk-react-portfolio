export const NavHumburgerMenu = ({
  toggleHamburgerMenu,
  hamburgerMenuIsOpen,
}) => {
  if (!hamburgerMenuIsOpen) {
    return (
      <button
        onClick={toggleHamburgerMenu}
        className="text-3xl cursor-pointer relative w-8 h-8"
      >
        <div className="hamburgerMenuOpen"></div>
      </button>
    );
  } else
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
              className="text-3xl cursor-pointer relative w-8 h-8"
            >
              <div className="hamburgerMenuClose"></div>
            </button>
          </li>
        </ul>
      </nav>
    );
};
