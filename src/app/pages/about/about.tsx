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
            <p>Sou formado pela Universidade Federal do Rio Grande do Norte (UFRN)</p>
          </section>
          <section className="summary">
            <p>• Graduated in Systems Analysis and Development</p>
            <p>• Two years of experience</p>
            <p>• B1 Itermediate english level</p>
            <p>
              • Studying Cloud Solutions in AWS and Events-Driven Architecture
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}
