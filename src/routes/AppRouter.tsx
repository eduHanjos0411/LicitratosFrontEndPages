import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { CadastroPage } from "../pages/CadastroPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages//dashboard/DashboardPage";
import { PrivateRoute } from "./PrivateRoute";
import { DashboardDocPage } from "../pages/dashboard/DashboardDocPage";
import { DashboardEditalPage } from "../pages/dashboard/DashboardEditalPage";
import { DashboardHomePage } from "../pages/dashboard/DashBoardHomePage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas (SPA entre HomePage e CadastroPage) */}
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<CadastroPage />} />

        {/* Login: se já estiver autenticado, mandar para dashboard */}
        <Route path="/login" element={<LoginPage />} />

        {/* Rotas PRIVADAS */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
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
