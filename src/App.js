import { Home } from "./containers/Home";
import { Portfolio } from "./containers/Portfolio";
import { AboutMe } from "./containers/AboutMe";
import { ContactMe } from "./containers/ContactMe";

import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div>
      <Home />
      <Portfolio />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
};
