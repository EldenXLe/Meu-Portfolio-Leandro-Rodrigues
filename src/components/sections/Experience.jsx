import experiences from "../../data/experiences";
import SectionTitle from "../ui/SectionTitle";

function Experience() {
  return (
    <section id="experiencia">
      <div className="container">
        <div data-aos="fade-up">
          <SectionTitle
            label="Experiência"
            title="Minha trajetória profissional"
            description="Vivências que fortaleceram minha comunicação, resolução de problemas e visão prática sobre tecnologia."
          />
        </div>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <article
              className="experience-card"
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;