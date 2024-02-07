export const NavHumburgerMenu = ({ hamburgerMenuIsOpen }) => {
  if (!hamburgerMenuIsOpen) {
    return "";
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
        </ul>
      </nav>
    );
};
