export const Header = () => {
  return (
    <div
      id="header"
      className="w-screen flex flex-col align-middle items-center sm:flex-row justify-around m-6 shadow-xl"

      //
    >
      <h1 id="headerTitle" className="text-3xl font-bold">
        YK
      </h1>

      <nav id="headerNav">
        <ul className="flex flex-col sm:flex-row space-x-0 sm:space-x-8 cursor-pointer text-center m-6">
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
