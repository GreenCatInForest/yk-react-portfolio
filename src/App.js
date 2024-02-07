import { Home } from "./containers/Home";
import { Projects } from "./containers/Projects";
import { TechStack } from "./components/TechStack";
import { ContactMe } from "./containers/ContactMe";

import { Footer } from "./components/Footer";

import { Banner } from "./components/Banner";

export const App = () => {
  return (
    <div className="appContainer">
      <Home />
      <Projects />
      <Banner />
      <TechStack />
      <ContactMe />
      <Footer />
    </div>
  );
};
