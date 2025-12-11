import './servicoCard.css'

export interface CardProps {
  img: string
  titulo: string
  subtitulo: string
}

export function ServicoCard({img, titulo, subtitulo}: CardProps) {
  return (
    <div className="serv-card">
      <img
        src={img}
        alt="ícone"
        className="serv-icon"
      />

      <h3 className="serv-title">{titulo}</h3>
      <p className="serv-subtitle">{subtitulo}</p>
    </div>
  );
}
