function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="#top" className="logo">
          Leandro Rodrigues
        </a>

        <nav>
          <ul className="nav-list">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#tecnologias">Tecnologias</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#experiencia">Experiência</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;