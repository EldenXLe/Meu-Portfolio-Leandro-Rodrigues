import { WHATSAPP, MAIN_ACTION } from "../../data/contact";

const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
];

function Header() {
  return (
    <header className="nav nav--centre">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">Pular para o conteúdo</a>
        <a className="nav__logo" href="#top">
          <span className="mark" data-mark="dots" aria-hidden="true"></span><span>Leandro<span className="nav__logo-rest"> Rodrigues</span></span>
        </a>
        <nav className="nav__links" aria-label="Principal">
          {links.map((link) => (
            <div className="nav__item" key={link.href}>
              <a className="nav__link" href={link.href}>{link.label}</a>
            </div>
          ))}
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary" href={WHATSAPP} target="_blank" rel="noreferrer">{MAIN_ACTION}</a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
