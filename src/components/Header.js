export const Header = () => {
  return (
    <div
      id="header"
      className="flex flex-col justify-center align-middle sm:flex-row"
    >
      <h1 className="text-3xl font-bold">YK</h1>
      <nav id="headerNav">
        <ul>
          <li>
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
            <button>
              <a href="#downloadCv">Download CV</a>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
