export const Header = () => {
  return (
    <div id="header" className="headerNav">
      <h1 id="headerTitle" className="text-3xl font-bold">
        YK
      </h1>

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
            <button className="btn-orange">
              <a href="#downloadCv">Download CV</a>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
