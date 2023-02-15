import { useState } from "react";
import { useAuth } from "./useAuth";
import { URI } from "../conf";

export const useRegister = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  const { dispatch } = useAuth();

  const register = async (user) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      // register user request
      `${URI}/api/user/register`,
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

  return { register, isLoading, error };
};
