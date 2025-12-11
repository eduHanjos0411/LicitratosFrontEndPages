import { useState } from "react";
import { TopTextDocumentos } from "../../components/dashboardpage_components/toptexts/TopTextDocumentos";
import "../../styles/documentosDash.css";

export function DashboardDocPage() {

  // guarda o índice do processo aberto
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const processos = ["Processo 1", "Processo 2", "Processo 3", "Processo 4", "Processo 5"];

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i); // fecha se clicar no mesmo
  }

  return (
    <>
      <TopTextDocumentos />

      <section className="documentos-dashboard">
        <ul className="processos-list">

          {processos.map((nome, i) => (
            <li key={i} className="item-list">
              <p>{nome}</p>

              {openIndex === i ? (
                <img
                  className="img-set-open"
                  src="arrowDown.svg"
                  onClick={() => toggle(i)}
                />
              ) : (
                <img
                  className="img-set-open"
                  src="arrowUp.svg"
                  onClick={() => toggle(i)}
                />
              )}

              {/* Aqui você pode renderizar o conteúdo expandido */}
              {openIndex === i && (
                <div className="conteudo-expandido">
                  Conteúdo detalhado de {nome}
                </div>
              )}
            </li>
          ))}

        </ul>
      </section>
    </>
  );
}
