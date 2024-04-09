import "./project.css";

export default function Project() {
  return (
    <section id="projects">
      <section className="container">
        <section className="sections-header">
          <h3>Projects</h3>
          <p>Love building something</p>
        </section>
        <section className="content">
          <section className="item">
            <h4>Projeto A</h4>
            <img
              src="https://th.bing.com/th/id/OIP.1qTMKwdpiGAbQPoIDnr04wHaEK?rs=1&pid=ImgDetMain"
              alt="projeto x"
            />
            <p>Este projeteo foi criado para resolver poblema x</p>
          </section>
          <section className="item">
            <h4>Projeto B</h4>
            <img
              src="https://th.bing.com/th/id/OIP.1qTMKwdpiGAbQPoIDnr04wHaEK?rs=1&pid=ImgDetMain"
              alt="projeto x"
            />
            <p>Este projeteo foi criado para resolver poblema x</p>
          </section>
        </section>
      </section>
    </section>
  );
}
