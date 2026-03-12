function ProjectCard({ title, description, techs, image, demo, github }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={image} alt={`Projeto ${title}`} loading="lazy" />
      </div>

      <h3 className="project-title">{title}</h3>

      <p className="project-description">{description}</p>

      <div className="project-techs">
        {techs.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={demo} target="_blank" rel="noreferrer">
          Ver projeto
        </a>

        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;