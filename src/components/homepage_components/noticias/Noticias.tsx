import { NoticiaCard, type CardProps } from "./CardNoticia/CardNoticia";
import "./noticias.css";

const noticiasCards: CardProps[] = [
  {
    img: "./not1.png",
    titulo:
      "Prefeitura investe em análise situacional da área da Administração e Planejamento",
    subtitulo:
      "O Poder Público que melhor detalhar o planejamento estratégico, bem como os indicadores e ações a serem desenvolvidas nessa área",
  },
  {
    img: "./not2.png",
    titulo:
      "Tesouro vê necessidade de desaceleração da atividade para conter inflação",
    subtitulo:
      "O secretário do Tesouro Nacional, Rogério Ceron, afirmou nesta quinta-feira (15) que vê uma necessidade de desaceleração da atividade econômica para conter a alta da inflação.",
  },
  {
    img: "./not3.png",
    titulo:
      "Capacitação do CNJ aborda uso de PowerBI em auditorias internas dos tribunais",
    subtitulo:
      "O curso surgiu da necessidade de sistematização e organização de dados obtidos em auditorias e da utilização dessas informações inclusive para apoio a decisões organizacionais.",
  },
];

export function Noticias() {
  return (
    <>
      <section className="noticia-section">
        <header className="noticia-header">
          <h1 className="header-sections">Notícias</h1>
          <h2 className="noticia-subtitulo">
            Veja as últimas notícias sobre Licitações e Contratos
          </h2>
        </header>

        <article className="noticia-card-container">
          {noticiasCards.map((card, idx) => {
            return <NoticiaCard key={idx} {...card} />;
          })}
        </article>
      </section>
    </>
  );
}
