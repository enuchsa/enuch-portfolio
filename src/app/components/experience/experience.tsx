import "./experience.css";

export default function Experience() {
  return (
    <section id="experience">
      <p className="title-1">Professional</p>
      <h2 className="title-2">
        {" "}
        <span>Work</span> Experience
      </h2>
      <section className="experience-content">
        <div className="enterprises">
          <img
            className="logo"
            src="https://media.licdn.com/dms/image/D4D0BAQH5-dJI3aF7iQ/company-logo_200_200/0/1704315722527/esigsoftware_logo?e=1720051200&v=beta&t=w1UZCPmM0IydX0HB1gtCMQfXUY_vKTn4FMU106qhWzA"
            alt="logo_esig"
          />
          <div className="content">
            <p className="ano">
              <span className="red">2021</span> - 2023
            </p>
            <p className="name">
              <span className="red">Java Developer</span> - Esig Software e
              Consultoria em TI
            </p>
            <p>
              Stack:{" "}
              <span className="red">
                Java; Spring; Hibernate; JPA; JSF; JSP; Struts; Git; GitLab
                PostgreSQL; Javascript; HTML
              </span>
            </p>
          </div>
        </div>
        <div className="enterprises">
          <img
            className="logo"
            src="https://github.com/enuchsa/enuch-portfolio/blob/main/public/assets/images/modelar-logo.png?raw=true"
            alt="logo_modelar"
          />
          <div className="content">
            <p className="ano">
              <span className="red">2023</span> - 2023
            </p>
            <p className="name">
              <span className="red">Java Developer</span> - Modelar Tecnologia
            </p>
            <p>
              Stack:{" "}
              <span className="red">
                Java; Spring Boot; Spring Security; Spring Data; Hibernate; JPA; Thymeleaf; React; Git; BitBucket
                OracleDB; Javascript; HTML; IntelliJ; Docker; AWS
              </span>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
