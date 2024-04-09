import Navbar from "./components/navbar/navbar";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Project from "./pages/project/project";
import Skill from "./pages/skill/skill";

export default function index() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skill />
    </main>
  );
}
