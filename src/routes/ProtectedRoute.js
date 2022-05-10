import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context";
export function ProtectedRoute({ children }) {
  const location = useLocation();
  const {
    userInfo: { token },
  } = useAuth();
  return token ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
