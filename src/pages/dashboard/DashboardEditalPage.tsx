import { TopTextEditais } from "../../components/dashboardpage_components/toptexts/TopTextEditais";
import "../../styles/documentosDash.css";

export function DashboardEditalPage() {
  return (
    <>
    <TopTextEditais/>
    <section className="documentos-dashboard">
        <ul className="processos-list">          
            <li className="item-list">
              <p>Edital 1</p>
            </li>
            <li className="item-list">
              <p>Edital 2</p>
            </li>
                        <li className="item-list">
              <p>Edital 3</p>
            </li>
                        <li className="item-list">
              <p>Edital 4</p>
            </li>
                        <li className="item-list">
              <p>Edital 5</p>
            </li>

        </ul>
      </section>
    </>
  )
}