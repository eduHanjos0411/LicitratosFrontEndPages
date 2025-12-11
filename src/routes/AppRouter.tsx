import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CadastroPage } from "../pages/CadastroPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages//dashboard/DashboardPage";
import { DashboardDocPage } from "../pages/dashboard/DashboardDocPage";
import { DashboardEditalPage } from "../pages/dashboard/DashboardEditalPage";
import { DashboardHomePage } from "../pages/dashboard/DashBoardHomePage";
import { HomePage } from "../pages/HomePage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas (SPA entre HomePage e CadastroPage) */}
        <Route path="" element={<HomePage />}>
          
        </Route>

        <Route path="licitratos/cadastro" element={<CadastroPage />} />

          {/* Login: se já estiver autenticado, mandar para dashboard */}
          <Route path="licitratos/login" element={<LoginPage />} />

        {/* Rotas PRIVADAS */}
        <Route
          path="/dashboard"
          element={
              <DashboardPage />
          }
        >
          {/* Home da dashboard */}
          <Route index element={<DashboardHomePage />} />
          {/* Subrotas da Dashboard (SPA) */}
          <Route path="documentos" element={<DashboardDocPage />} />
          <Route path="editais" element={<DashboardEditalPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
