import styles from "./Signup.module.css";
import { useState } from "react";
import { useSignup } from "../../hooks/useSingup";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setdisplayName] = useState("");
  const { error, isPending, signup } = useSignup();

  const handleSignup = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };
  return (
    <div>
      <form onSubmit={handleSignup} className={styles["signup-form"]}>
        <h2>Signup</h2>
        <label>
          <span>Email</span>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            value={password}
          />
        </label>
        <label>
          <span>Name</span>
          <input
            type="text"
            onChange={(e) => setdisplayName(e.target.value)}
            required
            value={displayName}
          />
        </label>
        {!isPending && <button className="btn">Signup</button>}
        {isPending && (
          <button className="btn" disabled>
            Loading
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
