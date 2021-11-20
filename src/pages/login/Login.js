import styles from "./Login.module.css";
import { useState } from "react";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div>
      <form onSubmit={handleLogin} className={styles["login-form"]}>
        <h2>Login</h2>
        <label>
          <span>Email</span>
          <input
            type="text"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            required
          />
        </label>

        <label>
          <span>Password</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </label>
        <button className="btn">Login</button>
      </form>
    </div>
  );
}
