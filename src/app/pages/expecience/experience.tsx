import "./experience.css";

export default function Experience() {
  return (
    <section id="experiences">
      <section className="container">
        <section className="sections-header">
          <p>My journey so far</p>
          <h3>Experiences</h3>
        </section>
        <section className="timeline">
          <section className="item right">
            <section className="logo">
              <img
                src="http://modelartecnologia.com/portal/wp-content/uploads/2020/02/LOGO-MODELAR-MAIOR-2.png"
                alt=""
              />
            </section>
            <header>
              <h3>Software Engineer</h3>
              <h4>Modelar Tecnologia</h4>
              <p>
                Stack: Java, Spring Framework, Hibernate, JPA, Junit, IntelliJ.{" "}
              </p>
            </header>
            <section className="date">2023 - 2023</section>
          </section>
          <section className="item left">
            <section className="date">2021 - 2023</section>
            <header>
              <h3>Software Engineer</h3>
              <h4>Esig Software e Consultoria em TI</h4>
              <p>
                Stack: Java, Spring Framework, Hibernate, JPA, Junit, IntelliJ.{" "}
              </p>
            </header>
            <section className="logo">
              <img
                src="https://media.licdn.com/dms/image/D4D0BAQH5-dJI3aF7iQ/company-logo_200_200/0/1704315722527/esigsoftware_logo?e=1720656000&v=beta&t=OCOoJEbLjpANf1AOXyrDfraqVb3SOQU-9UDGxZ3BN-o"
                alt="esig"
              />
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
