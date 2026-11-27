import { useEffect } from "react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Statement from "./components/sections/Statement";
import Tech from "./components/sections/Tech";
import About from "./components/sections/About";

// the kit's behaviour (nav sheet, hovers, hero loop, moments) reads the DOM, so it loads once React has rendered it
const KIT_SCRIPTS = ["/kit/system.js", "/kit/motion/motion.js", "/kit/layout/layout.js", "/kit/diagrams/mount.js"];

function App() {
  useEffect(() => {
    KIT_SCRIPTS.forEach((src) => {
      if (document.querySelector(`script[src="${src}"]`)) return;
      const script = document.createElement("script");
      script.type = "module";
      script.src = src;
      document.body.appendChild(script);
    });
  }, []);

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Projects />
        <Statement />
        <Tech />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
