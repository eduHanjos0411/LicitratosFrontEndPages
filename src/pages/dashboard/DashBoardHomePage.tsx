import { TopTextInicio } from "../../components/dashboardpage_components/toptexts/TopTextInicio";
import {
  NoticiaCard,
  type CardProps,
} from "../../components/homepage_components/noticias/CardNoticia/CardNoticia";
import '../../styles/noticiasDash.css'

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

export function DashboardHomePage() {
  return (
    <>
      <TopTextInicio />

      <article className="noticias-dashboard">
        {noticiasCards.map((card, idx) => {
          return <NoticiaCard key={idx} {...card} />;
        })}
      </article>
    </>
  );
}
