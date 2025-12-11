import './contato.css'

export function Contato() {
  return (
    <>
      <section className="contato-section">
        <header className="contato-header">
          <h1 className="contato-titulo">Contato</h1>
          <h2 className="contato-subtitulo">
            Vamos juntos levar sua empresa para o próximo nível de gestão?
          </h2>
        </header>
        <article className='contato-card-container'>

            <div className="form-container">
              <form className="form-content">
                <input type="text" placeholder="Nome da empresa" />
                <input type="text" placeholder="Qual o segmento da empresa?" />
                <input type="text" placeholder="Nome do responsável" />
                <input type="text" placeholder="Telefone do responsável" />
                <input type="email" placeholder="Email corporativo" />

                <textarea placeholder="Qual seu principal desafio?"></textarea>

                <button className='contato-btn' type="submit">Receber uma proposta</button>
              </form>
            </div>
        </article>
      </section>
    </>
  );
}
