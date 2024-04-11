import "./about.css";

export default function About() {
  return (
    <section id="about">
      <section className="container">
        <header className="sections-header">
          <h3>About me</h3>
          <p>I am a lover of tecnology and science</p>
        </header>
        <section className="about-text">
          <section className="cover-letter">
            <p>
              Só mais uma pessoa apaixonada por inovação, ciência e tecnologia.
              <br />
              <br />
              Sou engenheiro de software formado em análise e desenvolvimento de
              sistemas, atuo há três anos utilizando a linguagem Java e a
              tecnologia Spring Framework no desenvolvimento de sistemas de
              ponta a ponta no contexto de gestão integrada e educação a nível
              médio e superior.
              <br />
              <br />
              Bastante proativo, adaptável, e animado, possuo ótimas habilidades
              para resolução de problemas, lidar com equipes e prazos. Também
              possuo experiência lidando com clientes, visão de produto e
              metologias ágeis e orientadas a metas.
            </p>
          </section>
          <section className="networks">
            <a
              href="https://www.linkedin.com/in/enuchsa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/enuchsa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </section>
        </section>
      </section>
    </section>
  );
}
