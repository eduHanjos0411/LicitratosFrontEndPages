import "../styles/loginPage.css";


export function LoginPage() {


  return (
    <main className="entire-page">
      <aside className="aside-container">

        <form className="form-container-auth" >
          <h1 className="titulo-aside">Login</h1>

          <input
            className="input-text"
            type="text"
            name="usuario"
            id="usuario"
            placeholder="Digite seu usuário"
          />

          <input
            className="input-text"
            type="password"
            name="senha"
            id="senha"
            placeholder="Digite sua senha"
          />

          <button type="submit" className="btn-submit-form">
            Fazer Login
          </button>
        </form>
      </aside>
      <article className="image-container">
        <h1 className="first-text">O próximo passo</h1>
        <h1 className="second-text">Para sua empresa</h1>
      </article>
    </main>
  );
}
