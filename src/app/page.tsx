import Navbar from "./components/navbar/navbar";
import About from "./pages/about/about";
import Certificate from "./pages/certificate/certificate";
import Education from "./pages/education/education";
import Experience from "./pages/expecience/experience";
import Home from "./pages/home/home";
import Project from "./pages/project/project";
import Skill from "./pages/skill/skill";

export default function index() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
      <Certificate />
      <Skill />
      <Project />
    </main>
  );
}
