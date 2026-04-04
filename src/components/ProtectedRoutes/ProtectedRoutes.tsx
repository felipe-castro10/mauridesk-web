import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  
  const token = localStorage.getItem("mauridesk.token")

  if (!token) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}