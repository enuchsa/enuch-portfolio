import "./home.css";

export default function Home() {
  return (
    <section id="home">
      <section className="container">
        <section className="presentation">
          <p className="saudation">
            <span className="border">Hello!</span> i am
          </p>
          <p className="name">Enuch Santos</p>
          <p className="job">
            Software <span>Engineer</span>
          </p>
        </section>
        <section className="buttons">
          <button className="contact">Contact me</button>
          <button className="projects">My projects</button>
        </section>
      </section>
    </section>
  );
}
