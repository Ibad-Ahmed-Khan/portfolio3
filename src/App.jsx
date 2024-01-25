import { Box } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import Header from "./components/Header";
import Section from "./components/Section";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Box>
      <Header />
      <Section />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
