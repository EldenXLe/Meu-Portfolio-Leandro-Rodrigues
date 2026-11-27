import Arrow from "../ui/Arrow";
import { WHATSAPP, MAIN_ACTION } from "../../data/contact";

function Hero() {
  return (
    <section className="hero hero--centred" data-enter aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text">
          <div className="hero__c">
            <a className="pill" href="#sobre">
              <span>Aberto a vagas júnior</span>
              <span className="muted">Remoto, híbrido ou região de Campinas</span>
            </a>
            <h1 id="hero-h">Leandro Rodrigues, front‑end em React</h1>
            <p className="hero__lead">
              Crio aplicações web responsivas com React, JavaScript e Tailwind CSS, com cinco
              projetos publicados. Tecnólogo em Análise e Desenvolvimento de Sistemas, com quase três
              anos de experiência em sistemas ERP.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                {MAIN_ACTION}
                <Arrow />
              </a>
              <a className="btn btn--secondary" href="#projetos">Ver projetos</a>
            </div>
          </div>

          <div
            className="hero__window"
            role="img"
            aria-label="Editor de código com o componente ProjectCard em React, de um dos projetos"
          >
            <div className="ly-piece" aria-hidden="true">
              <div className="ui ui-panel ui-code hero-code" data-ui="code" data-ui-loop>
                <div className="ui-code__tabs">
                  <span className="ui-code__tab is-on"><i className="ui-code__lang">JSX</i>ProjectCard.jsx</span>
                  <span className="ui-code__tab"><i className="ui-code__lang">JS</i>projects.js</span>
                  <span className="ui-spacer"></span>
                  <span className="ui-chip ui-chip--plain ui-code__chip">React 19</span>
                </div>
                <pre className="ui-code__pre"><code>
<span className="ui-code__ln" data-n="1"><span className="k">export default function</span> <span className="f">ProjectCard</span>({"{ "}project, openId, onOpen{" }"}) {"{"}</span>{"\n"}
<span className="ui-code__ln" data-n="2" data-note="O card só lê qual projeto está aberto.">  <span className="k">const</span> open = openId === project.id;</span>{"\n"}
<span className="ui-code__ln is-mark" data-n="3">  <span className="k">return</span> (</span>{"\n"}
<span className="ui-code__ln" data-n="4" data-note="Um botão de verdade: funciona no teclado.">    &lt;<span className="f">button</span> aria-pressed={"{"}open{"}"} onClick={"{"}() =&gt; <span className="f">onOpen</span>(project.id){"}"}&gt;</span>{"\n"}
<span className="ui-code__ln" data-n="5">      &lt;<span className="f">img</span> src={"{"}project.image{"}"} alt={"{"}project.title{"}"} loading=<span className="n">"lazy"</span> /&gt;</span>{"\n"}
<span className="ui-code__ln" data-n="6" data-note="Imagem com alt e carregamento sob demanda.">      &lt;<span className="f">h3</span>&gt;{"{"}project.title{"}"}&lt;/<span className="f">h3</span>&gt;</span>{"\n"}
<span className="ui-code__ln" data-n="7">    &lt;/<span className="f">button</span>&gt;</span>{"\n"}
<span className="ui-code__ln" data-n="8">  );</span>{"\n"}
<span className="ui-code__ln" data-n="9">{"}"}</span>
                </code></pre>
                <div className="ui-code__hint" data-code-hint>
                  <span className="ui-dot"></span>
                  <span data-code-text>O card devolve o id do projeto para quem o abriu.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
