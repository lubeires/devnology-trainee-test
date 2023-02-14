import { useContext } from "react";
import { AuthContext } from "../context/auth";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw Error("useAuth deve ser utilizado dentro de um AuthContextProvider");

  return context;
};
