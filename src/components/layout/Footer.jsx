import Arrow from "../ui/Arrow";
import { WHATSAPP, LINKEDIN, EMAIL, GITHUB, MAIN_ACTION } from "../../data/contact";

function Footer() {
  return (
    <footer className="footer closing" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--word">
          <div className="section-head--split">
            <div>
              <h2 id="close-h">Vamos conversar sobre a sua vaga</h2>
              <p className="t-lead">Aberto a vagas de front-end, projetos freelance e conexões.</p>
            </div>
            <a className="btn btn--primary" href={WHATSAPP} target="_blank" rel="noreferrer">
              {MAIN_ACTION}
              <Arrow />
            </a>
          </div>
          <p className="close__word" aria-hidden="true">Leandro Rodrigues</p>
        </div>

        <div className="closing__links">
          <div className="grid">
            <div className="span-6 stack-4">
              <a className="nav__logo" href="#top">
                <span className="mark" data-mark="dots" aria-hidden="true"></span>Leandro Rodrigues
              </a>
              <p className="footer__lede">Interfaces em React, do layout ao deploy.</p>
            </div>
            <div className="span-2 footer__col">
              <h3>Portfólio</h3>
              <ul>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#tecnologias">Tecnologias</a></li>
                <li><a href="#sobre">Sobre</a></li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Contato</h3>
              <ul>
                <li><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href={EMAIL}>E-mail</a></li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Código</h3>
              <ul>
                <li><a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a></li>
                <li>
                  <a href="https://github.com/EldenXLe/Meu-Portfolio-Leandro-Rodrigues" target="_blank" rel="noreferrer">
                    Este site
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>&copy; {new Date().getFullYear()} Leandro Rodrigues</span>
            <span className="muted">Ícones: SVG Logos e VSCode Icons</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
