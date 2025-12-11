import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/loginPage.css";

export function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Se já estiver logado, redireciona automaticamente
  if (isAuthenticated) navigate("/dashboard");

  async function handleLogin() {
    // Chamada à API de login
    // const result = await fetch(...)

    const tokenFake = "meu-token-jwt";
    login(tokenFake);

    navigate("/dashboard");
  }

  return (
    <main className="entire-page">
      <aside className="aside-container">
        <button className="btn-voltar-inicio">Voltar para o Início</button>

          

          <form className="form-container-auth">
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

            <button onClick={handleLogin} className="btn-submit-form">
              Fazer Login
            </button>
          </form>

        <a className="nova-conta-text">Ainda não tem uma conta? Cadastre-se!</a>
      </aside>
      <article className="image-container">
        <h1 className="first-text">O próximo passo</h1>
        <h1 className="second-text">Para sua empresa</h1>
      </article>
    </main>
  );
}
