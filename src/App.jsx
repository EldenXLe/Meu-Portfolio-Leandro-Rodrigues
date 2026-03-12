import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Tech from "./components/sections/Tech";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;