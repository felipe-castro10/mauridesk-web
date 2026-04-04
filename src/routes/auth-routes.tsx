import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import { ProtectedRoute } from "../components/ProtectedRoutes/ProtectedRoutes";
import { Home } from "../pages/Home/Home";
import { ViewTicket } from "../pages/ViewTicket/ViewTicket";
import { CreateTicket } from "../pages/CreateTicket/CreateTicket";
import { PersonalizeTicket } from "../pages/PersonalizeTicket/PersonalizeTicket";

export function AuthRoutes() {
  return (
    <Routes>
      {/* Rota de Login: Se já tiver token, redireciona para Home */}
      <Route path="/" element={<SignIn />} />

      {/* Agrupamento de segurança */}
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/viewTicket/:id" element={<ViewTicket />} />
        <Route path="/create" element={<CreateTicket />} />
        <Route path="/customize" element={<PersonalizeTicket/>} />
      </Route>

      {/* Caso digitem qualquer rota inexistente */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}