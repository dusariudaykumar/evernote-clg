import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts";

const ProtectedRoute = () => {
  const location = useLocation();
  const {
    authState: { isAuth },
  } = useAuth();

  return isAuth === true ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
};
export { ProtectedRoute };
