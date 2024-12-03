import Navbar from "./components/Navbar";
import Contact from "./page/Contact";
import Experience from "./page/Experience";
import Home from "./page/Home";
import Projects from "./page/Projects";
import Skills from "./page/Skills";

export default function Main() {
  return (
    <main className="container">
      <Navbar>
        <Home />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </Navbar>
    </main>
  );
}
