import './cardNoticia.css'

export interface CardProps {
  img: string
  titulo: string
  subtitulo: string
}

export function NoticiaCard({img, titulo, subtitulo}: CardProps) {
  return ( 
    <div className="noticia-card">
      <img
        src={img}
        alt="imagem da notícia"
        className="noticia-img"
      />

      <div className="noticia-content">
        <h3 className="noticia-titulo">
          {titulo}
        </h3>

        <p className="noticia-desc">
          {subtitulo}
        </p>
      </div>
    </div>
  );
}
