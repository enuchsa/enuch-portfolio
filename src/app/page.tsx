import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Project from "./components/project/project";
import Skill from "./components/skill/skill";

export default function index() {
  return (
    <main>
      <Header />
      <Home />
      <About />
      <Experience />
      <Project />
      {/* <Skill /> */}
    </main>
  );
}
