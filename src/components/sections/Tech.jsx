import techs from "../../data/techs";
import SectionTitle from "../ui/SectionTitle";

function Tech() {
  return (
    <section id="tecnologias">
      <div className="container">

        <div data-aos="fade-up">
          <SectionTitle
            label="Tecnologias"
            title="Ferramentas que fazem parte da minha jornada"
            description="Tecnologias que utilizo para criar interfaces modernas, interativas e bem estruturadas."
          />
        </div>

        <div className="tech-grid">
          {techs.map((tech, index) => (
            <div
              className="tech-card"
              key={tech.name}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <h3>{tech.name}</h3>

              <p>{tech.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Tech;