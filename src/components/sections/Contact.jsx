import SectionTitle from "../ui/SectionTitle";

function Contact() {
  return (
    <section id="contato">
      <div className="container contact-wrapper">
        <div className="contact-text" data-aos="fade-right">
          <SectionTitle
            label="Contato"
            title="Vamos conversar"
            description="Estou aberto a oportunidades na área de desenvolvimento front-end, projetos freelance e conexões profissionais."
          />
        </div>

        <div className="contact-card" data-aos="fade-left">
          <a
            href="https://wa.me/5511942394442?text=Olá%20Leandro,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/in/leandro-rodrigues-3852781b8/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:leandrocesardasilvarodrigues@gmail.com">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;