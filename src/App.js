import { useState, useEffect } from "react";

import { Projects } from "./containers/Projects";
import { ContactMe } from "./containers/ContactMe";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TechStack } from "./components/TechStack";
import { Footer } from "./components/Footer";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkMode");
      document.body.classList.remove("lightMode");
    } else {
      document.body.classList.add("lightMode");
      document.body.classList.remove("darkMode");
    }
    return () => {};
  }, [darkMode]);

  return (
    <div className="appContainer">
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <Hero darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <TechStack />
      <ContactMe darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};
