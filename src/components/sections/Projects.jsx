import { useState } from "react";
import projects from "../../data/projects";
import { GITHUB } from "../../data/contact";

function Projects() {
  const [openId, setOpenId] = useState(projects[0].id);
  const open = projects.find((p) => p.id === openId);

  return (
    <section className="section" id="projetos" aria-labelledby="projetos-h">
      <div className="wrap">
        <div className="group">
          <div className="grid">
            <h2 id="projetos-h" className="span-5">Projetos em React publicados, com o código aberto</h2>
            <p className="span-6 start-7 projects__intro">
              Escolha um projeto na lista para ver a tela, as tecnologias usadas e os links do site
              publicado e do repositório.{" "}
              <a className="link" href={GITHUB} target="_blank" rel="noreferrer">Ver todos no GitHub</a>
            </p>
          </div>

          <div className="ui app fill">
            <div className="app__pane app__pane--list">
              <div className="app__bar">
                <span className="app__dots" aria-hidden="true"><i></i><i></i><i></i></span>
                <span>Projetos</span>
                <span className="app__count">{projects.length}</span>
              </div>
              <ul className="app__rows">
                {projects.map((project) => (
                  <li key={project.id}>
                    <button
                      type="button"
                      className="app__row"
                      aria-pressed={project.id === openId}
                      onClick={() => setOpenId(project.id)}
                    >
                      <span className="app__name">{project.title}</span>
                      <span className="app__kind">{project.kind}</span>
                      <span className="app__chip">{project.techs[0]}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="app__pane app__pane--open" aria-live="polite">
              <div className="app__bar">
                <span className="app__url">{open.demo.replace(/^https:\/\/|\/$/g, "")}</span>
              </div>
              <div className="app__body">
                <div className="app__shot">
                  <img key={open.id} src={open.image} alt={`Tela do projeto ${open.title}`} loading="lazy" />
                </div>
                <div className="app__info">
                  <p className="app__title">{open.title}</p>
                  <p>{open.description}</p>
                  <ul className="app__techs" aria-label="Tecnologias">
                    {open.techs.map((tech) => <li key={tech}>{tech}</li>)}
                  </ul>
                  <div className="app__links">
                    <a className="link" href={open.demo} target="_blank" rel="noreferrer">Abrir o site</a>
                    <a className="link" href={open.github} target="_blank" rel="noreferrer">Ver o código</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
