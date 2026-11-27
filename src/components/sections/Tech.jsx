import techs, { stackDiagram, studying } from "../../data/techs";

function Tech() {
  return (
    <section className="section" id="tecnologias" aria-labelledby="tecnologias-h">
      <div className="wrap">
        <div className="grid">
          <div className="span-5 tech__text">
            <h2 id="tecnologias-h">A stack de front‑end em cada projeto</h2>
            <ul className="rows tech__rows">
              {techs.map((tech) => (
                <li key={tech.name}>
                  <span className="rows__name">{tech.name}</span>
                  <p>{tech.line}</p>
                </li>
              ))}
            </ul>
            <p className="tech__next"><span className="muted">Estudando agora:</span> {studying}.</p>
          </div>
          <div className="frame frame--split span-6 start-7 tech__frame">
            <div className="dg" data-diagram={JSON.stringify(stackDiagram)}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech;
