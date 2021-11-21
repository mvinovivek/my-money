import { useAuthContext } from "./useAuthContext";
import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";

export const useLogin = () => {
  const [error, seterror] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const [isCancelled, setisCancelled] = useState(false);

  const login = async (email, password) => {
    seterror(null);
    setIsPending(true);
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);
      dispatch({ type: "LOGIN", payload: res.user });
      if (!isCancelled) {
        seterror(null);
        setIsPending(false);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        seterror(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      setisCancelled(true);
    };
  }, []);

  return { login, isPending, error };
};
