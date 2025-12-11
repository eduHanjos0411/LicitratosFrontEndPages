import { ServicoCard, type CardProps } from './CardServico/ServicoCard'
import './servico.css'

const servCards: CardProps[] = [
  {
    img: "service.png",
    titulo: "Consultoria",
    subtitulo: "Consultoria em Licitações e Contratos"
  },
  {
    img: "service.png",
    titulo: "Assessoria",
    subtitulo: "Assessoria em Licitações e Contratos"
  },
  {
    img: "service.png",
    titulo: "Mentoria",
    subtitulo: "Mentoria em Licitações e Contratos"
  },
]

export function Servicos() {
  return (
    <section className="servico-section">
      <header className="servico-header">
        <h1 className="servico-titulo">Nossos Serviços</h1>
        <h2 className="servico-subtitulo">Temos a solução para o seu negócio</h2>
      </header>
      <article className='servico-card-container'>
        {servCards.map((card, idx) => {
          return (
            <ServicoCard key={idx} {...card}/>
          )
        })}
      </article>
    </section>
  )
}