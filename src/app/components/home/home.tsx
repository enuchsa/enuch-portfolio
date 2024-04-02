import "./home.css";

export default function Home() {
  return (
    <section id="home">
      <section className="home-section">
        <section className="home-text">
          <p className="hello">
            <span className="span">Hello!</span> i am
          </p>
          <p className="name">Enuch Santos</p>
          <p className="function">Software <span className="speciality">Engineer</span></p>
        </section>
        <section className="buttons">
          <button className="contact">Contact me</button>
          <button className="projects">My projects</button>
        </section>
      </section>
    </section>
  );
}
