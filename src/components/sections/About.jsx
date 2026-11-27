import profile from "../../assets/images/profile/profile.jpeg";
import experiences from "../../data/experiences";

function About() {
  return (
    <section className="section" id="sobre" aria-labelledby="sobre-h">
      <div className="wrap">
        <div className="grid about">
          <div className="span-6 about__text">
            <h2 id="sobre-h">Do suporte técnico ao front‑end</h2>
            <p className="t-lead">
              Anos atendendo usuários de sistemas ERP me ensinaram onde uma interface confunde. Hoje
              uso isso para criar telas em React que se explicam sozinhas.
            </p>

            <div className="experience" id="experiencia">
              <h3 className="t-label muted">Experiência em suporte de TI</h3>
              <ul className="rows">
                {experiences.map((item) => (
                  <li key={item.id}>
                    <span className="rows__name">{item.role}</span>
                    <span className="rows__value muted">{item.company}</span>
                    {item.tasks.map((task) => <p key={task}>{task}</p>)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="span-6 start-7 about__side">
            <div className="frame frame--photo about__photo">
              <img className="frame__img" src={profile} alt="Retrato de Leandro Rodrigues" loading="lazy" />
            </div>
            <dl className="about__facts">
              <div><dt>Formação</dt><dd>Análise e Desenvolvimento de Sistemas</dd></div>
              <div><dt>Formação</dt><dd>Gestão da Tecnologia da Informação</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
