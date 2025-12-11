import "./equipe.css";
import type { CardProps }  from "./CardEquipe/CardEquipe";
import CardEquipe from "./CardEquipe/CardEquipe";

const infosCards: CardProps[] = [
  {
    nome: "Nathanael dos Santos Lopes ",
    desc: "Graduando em Tecnologia em Gestão Pública no IFB, Diretor de Relações Institucionais e Gestão da Atlética Audácia IFB; Graduando em Direito no IDP, membro do Coletivo Negro IDP.",
    cargo: "Presidente",
    img: "./nathanael.png",
  },
  {
    nome: "Gabriela Marques Santos",
    desc: "Graduanda em Tecnologia em Gestão Pública no IFB, Presidente do Centro Acadêmico de Gestão Pública do IFB, Diretora de relações institucionais da Federação Nacional dos Estudantes do campo de públicas",
    cargo: "Diretoria de Marketing",
    img: "./Gabriela.png"
  },
  {
    nome: "Maria Fernanda Santos de Abreu ",
    desc: "Graduanda em Tecnologia em Gestão Pública no IFB, Presidente da Atlética Audácia IFB, Secretária-Geral do Centro acadêmico de Gestão Pública do IFB, Coordenadora de Comunicação da Federação Nacional dos Estudantes do campo de públicas",
    cargo: "Diretoria de Projetos ",
    img: "./Maria.png"
  },
]

export function Equipe() {
  return (
    <section className="equipe-section">
      <header className="equipe-header">
        <h1 className="equipe-titulo">Nossa Equipe</h1>
        <h2 className="equipe-subtitulo">
          Conheça a Equipe integrante da Licitratos
        </h2>
      </header>

      <article className="equipe-card-container">
        {infosCards.map((card, idx) => {
          return (
            <CardEquipe key={idx} {...card}/>
          )
        })}
      </article>
    </section>
  );
}
