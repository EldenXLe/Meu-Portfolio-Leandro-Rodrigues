import profile from "../../assets/images/profile/profile.jpeg";
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-wrapper">
        <div className="hero-content" data-aos="fade-right">
          <p className="hero-tag">Front-End Developer</p>

          <h1 className="hero-title">
            Transformando ideias em interfaces modernas, organizadas e responsivas.
          </h1>

          <p className="hero-description">
            Sou Leandro Rodrigues, desenvolvedor front-end com foco em criar
            experiências web bem estruturadas, visuais agradáveis e fáceis de usar.
          </p>

          <div className="hero-buttons">
            <a href="#projetos" className="btn-primary">
              Ver projetos
            </a>
            <a href="#contato" className="btn-secondary">
              Entrar em contato
            </a>
          </div>
        </div>

        <div className="hero-panel" data-aos="fade-left">
          <div className="hero-card">
            <span className="hero-card-label">Resumo profissional</span>
            <h3>Construindo interfaces com foco em organização e experiência</h3>

            <ul className="hero-card-list">
              <li>React e JavaScript</li>
              <li>Interfaces responsivas</li>
              <li>Componentização</li>
              <li>Consumo de APIs</li>
              <li>Experiência com suporte técnico</li>
            </ul>
          </div>

          <div className="hero-mini-card">
            <p>Formação concluída</p>
            <strong>Análise e Desenvolvimento de Sistemas</strong>
          </div>

          <div className="hero-mini-card">
            <p>Formação concluída</p>
            <strong>Gestão da Tecnologia da Informação</strong>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Hero;