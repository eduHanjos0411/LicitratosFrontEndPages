import { useNavigate } from 'react-router-dom';
import '../styles/cadastroPage.css'

export function CadastroPage() {

    const navigate = useNavigate();
  
  async function handleCadastro() {
    navigate("licitratos/login");
  }


  return (
    <>
        <main className="entire-page">
      <aside className="aside-container">

          

          <form className="form-container-auth">
            <h1 className="titulo-aside">Cadastro</h1>

              <input
                className="input-text"
                type="text"
                name="usuario"
                id="usuario"
                placeholder="Digite seu usuário"
              />

              <input
                className="input-text"
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu email"
              />

              <input
                className="input-text"
                type="password"
                name="senha"
                id="senha"
                placeholder="Digite sua senha"
              />

            <button className="btn-submit-form" onClick={
              handleCadastro
            }>
              Fazer Cadastro
            </button>
          </form>
      
      </aside>

      <article className="image-container">
        <h1 className="first-text">Vem crescer</h1>
        <h1 className="second-text">Junto com a gente!</h1>
      </article>
    </main>
    </>
  )
}