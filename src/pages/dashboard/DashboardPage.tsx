import { Link, Outlet } from "react-router-dom";
import "../../styles/sideMenu.css";
import "../../components/dashboardpage_components/toptexts/topText.css";

export function DashboardPage() {
  return (
    <main style={{ display: "flex", flexDirection: "row", width: '100%'}}>
      <aside className="side-menu">
        <button className="toggle-sidebar-icon">
          <img src="./menuIcon.svg" />
        </button>

        <img className="user-photo" src="Logo.png" />

        <div className="itens-container">
          <h1 className="sidemenu-title">Área do Usuário</h1>

          <ul className="actions-list">
            <li>
              <Link className="link" to="">
                <button className="action-list-btn">
                  <img src="homeIcon.svg" />
                  Início
                </button>
              </Link>
            </li>

            <li>
              <Link className="link" to="documentos">
                <button className="action-list-btn">
                  <img src="docIcon.svg" />
                  Documentos
                </button>
              </Link>
            </li>

            <li>
              <Link className="link" to="editais">
                <button className="action-list-btn">
                  <img src="editalcon.svg" />
                  Editais
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <button className="exit-btn">
          <img src="exitIcon.svg" />
          Sair
        </button>
      </aside>

      <section style={{width: '80%'}}>
        {/* Aqui será renderizado o conteúdo das subpáginas */}
        <Outlet />
      </section>
    </main>
  );
}
