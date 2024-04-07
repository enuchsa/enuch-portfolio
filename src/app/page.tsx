import Navbar from "./components/navbar/navbar";
import About from "./pages/about/about";
import Education from "./pages/education/education";
import Experience from "./pages/expecience/experience";
import Home from "./pages/home/home";

export default function index() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
    </main>
  );
}
