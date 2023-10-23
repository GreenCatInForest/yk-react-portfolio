import { Home } from "./containers/Home";
import { Projects } from "./containers/Projects";
import { AboutMe } from "./containers/AboutMe";
import { ContactMe } from "./containers/ContactMe";

import { Footer } from "./components/Footer";

import { Banner } from "./components/Banner";

export const App = () => {
  return (
    <div className="w-screen flex flex-col items-center gap-10 sm:gap-12">
      <Home />
      <h2 className="shadow-xl py-2 px-60 text-lg text-center font-medium">
        My Projects
      </h2>
      <Projects />
      <Banner />
      <AboutMe />
      <Banner />
      <ContactMe />
      <Footer />
    </div>
  );
};
