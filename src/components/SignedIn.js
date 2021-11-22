import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";
export default function SignedIn({ children }) {
  const { user } = useAuthContext();
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
