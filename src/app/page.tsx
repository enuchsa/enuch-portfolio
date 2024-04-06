import Navbar from "./components/navbar/navbar";
import About from "./pages/about/about";
import Home from "./pages/home/home";

export default function index() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
    </main>
  );
}
