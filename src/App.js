import { Home } from "./containers/Home";
import { Projects } from "./containers/Projects";
import { AboutMe } from "./containers/AboutMe";
import { ContactMe } from "./containers/ContactMe";

import { Footer } from "./components/Footer";

import { Banner } from "./components/Banner";

export const App = () => {
  return (
    <div className="w-screen flex flex-col items-center gap-10 sm:gap-12 body-font font-poppins">
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
