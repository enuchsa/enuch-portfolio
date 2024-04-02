import About from "./components/about/about";
import Header from "./components/header/header";
import Home from "./components/home/home";

export default function index() {
  return (
    <main>
      <Header />
      <Home />
      <About />
    </main>
  );
}
