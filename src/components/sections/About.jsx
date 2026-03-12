import profile from "../../assets/images/profile/profile.jpeg";
import SectionTitle from "../ui/SectionTitle";

function About() {
  return (
    <section id="sobre">
      <div className="container about-content">

        <div className="about-image" data-aos="fade-right">
          <img src={profile} alt="Leandro Rodrigues" />
        </div>

        <div className="about-text" data-aos="fade-left">
          <SectionTitle
            label="Sobre mim"
            title="Uma base técnica com visão prática"
          />

          <p>
            Sou desenvolvedor front-end com formação em Análise e
            Desenvolvimento de Sistemas e atualmente cursando Gestão da
            Tecnologia da Informação.
          </p>

          <p>
            Minha experiência com suporte técnico me proporcionou uma visão
            prática sobre resolução de problemas, comunicação com usuários e
            melhoria da experiência em sistemas.
          </p>

          <p>
            Atualmente foco em criar interfaces modernas, responsivas e bem
            organizadas utilizando React, JavaScript e boas práticas de
            desenvolvimento.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;