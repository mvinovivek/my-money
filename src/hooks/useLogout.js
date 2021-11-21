import { useAuthContext } from "./useAuthContext";
import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";

export const useLogout = () => {
  const [error, seterror] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const [isCancelled, setisCancelled] = useState(false);

  const logout = async () => {
    seterror(null);
    setIsPending(true);
    try {
      await projectAuth.signOut();
      dispatch({ type: "LOGOUT" });
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

  return { logout, isPending, error };
};
