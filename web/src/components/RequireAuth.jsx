import { useAuth } from "../hooks/useAuth";
import { Login } from "../pages";

export const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  // redirect to login page if not authenticated
  return !user ? <Login /> : children;
};
