import "./about.css";

export default function About() {
  return (
    <section id="about">
      <section className="about-content">
        <section className="pic-profile">
          <img
            className="pic"
            src="https://github.com/enuchsa/enuch-portfolio/blob/main/public/assets/images/profile-picture.jpg?raw=true"
            alt="profile"
          />
        </section>
        <section className="about-text">
          <h2 className="title-1">
            About <span>me</span>
          </h2>
          <h3 className="title-2">A lover of technology and science</h3>
          <p>• Graduated in Systems Analysis and Development</p>
          <p>• Java Software Engineer</p>
          <p>• Studying AWS and English</p>
          <p>• B1 Intermediate English Level</p>
          <p>• Two years of experience</p>
          <section className="social">
            <a href="https://www.linkedin.com/in/enuchsa/" target="_blank">
              <span>
                <i className="fa-brands fa-linkedin"></i>
              </span>
            </a>
            <a href="https://github.com/enuchsa" target="_blank">
              <span>
                <i className="fa-brands fa-github"></i>
              </span>
            </a>
          </section>
        </section>
      </section>
    </section>
  );
}
