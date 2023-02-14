import { useState } from "react";
import { useAuth } from "./useAuth";

export const useLogin = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  const { dispatch } = useAuth();

  const login = async (user) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      // login user request
      `${process.env.REACT_APP_BASE_URL}/api/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...user }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    } else {
      // save user in local storage
      localStorage.setItem("user", JSON.stringify(data));

      // update the auth context
      dispatch({ type: "LOGIN", payload: data });
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
