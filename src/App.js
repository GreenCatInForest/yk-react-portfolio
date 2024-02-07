import { useState } from "react";

import { Projects } from "./containers/Projects";
import { ContactMe } from "./containers/ContactMe";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TechStack } from "./components/TechStack";
import { Footer } from "./components/Footer";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`appContainer ${darkMode ? "darkMode" : "lightMode"}`}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <Hero />
      <Projects />
      <TechStack />
      <ContactMe />
      <Footer />
    </div>
  );
};
