import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import SectionTitle from "../ui/SectionTitle";

function Projects() {
  return (
    <section id="projetos">
      <div className="container">
        <div data-aos="fade-up">
          <SectionTitle
            label="Projetos"
            title="Projetos em destaque"
            description="Projetos que mostram minha evolução com interfaces modernas, consumo de APIs e construção de experiências web."
          />
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                techs={project.techs}
                image={project.image}
                demo={project.demo}
                github={project.github}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;