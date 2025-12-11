import "./topText.css";

export interface topTextProps {
  titulo: string;
  subtitulo: string;
}

export function TopTextModel({ titulo, subtitulo }: topTextProps) {
  return (
    <>
      <main className="toptext-container">
        <div className="text-div">
          <h1 className="toptext-titulo">{titulo}</h1>
          <h2 className="toptext-subtitulo">{subtitulo}</h2>
        </div>

        <hr className="divider" />
      </main>
    </>
  );
}
