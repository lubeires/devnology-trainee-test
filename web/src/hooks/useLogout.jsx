import { useAuth } from "./useAuth";

export const useLogout = () => {
  const { dispatch } = useAuth();

  const logout = () => {
    // remove user from local storage
    localStorage.removeItem("user");

    // update the auth context
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
