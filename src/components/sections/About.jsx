import profile from "../../assets/images/profile/profile.jpeg";
import experiences, { education, courses } from "../../data/experiences";

function About() {
  return (
    <section className="section g2" id="sobre" aria-labelledby="sobre-h">
      <div className="wrap">
        <div className="group">
          <div className="grid about">
            <div className="span-6 about__text">
              <h2 id="sobre-h">Do suporte técnico ao front‑end</h2>
              <p className="t-lead">
                Trabalho com sistemas desde 2022. Foram quase três anos num ERP para oficinas,
                investigando falhas, integrações via API e emissão fiscal até achar a causa. Hoje levo
                esse olhar para interfaces em React que não deixam o usuário em dúvida.
              </p>
              <dl className="about__facts">
                {education.map((item) => (
                  <div key={item.course}>
                    <dt>Tecnólogo · {item.school} · {item.year}</dt>
                    <dd>{item.course}</dd>
                  </div>
                ))}
                <div>
                  <dt>Idiomas</dt>
                  <dd>Português nativo, inglês intermediário</dd>
                </div>
              </dl>
            </div>
            <div className="frame frame--photo span-6 start-7 about__photo">
              <img className="frame__img" src={profile} alt="Retrato de Leandro Rodrigues" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="experience" id="experiencia">
          <h3 className="t-card">Experiência profissional</h3>
          <ul className="rows">
            {experiences.map((item) => (
              <li key={item.id}>
                <span className="rows__name">
                  {item.role} <span className="muted">· {item.company}</span>
                </span>
                <span className="rows__value muted">{item.period}</span>
                {item.tasks.map((task) => <p key={task}>{task}</p>)}
              </li>
            ))}
          </ul>
          <dl className="courses">
            {courses.map((item) => (
              <div key={item.group}>
                <dt>Cursos · {item.group}</dt>
                <dd>{item.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
