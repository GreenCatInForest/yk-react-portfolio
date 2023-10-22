import { Home } from "./containers/Home";
import { Projects } from "./containers/Projects";
import { AboutMe } from "./containers/AboutMe";
import { ContactMe } from "./containers/ContactMe";

import { Footer } from "./components/Footer";

import { Banner } from "./components/Banner";

export const App = () => {
  return (
    <div>
      <Home />
      <Projects />
      <Banner />
      <AboutMe />
      <Banner />
      <ContactMe />
      <Footer />
    </div>
  );
};
