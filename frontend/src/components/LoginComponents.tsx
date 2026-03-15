import { useState } from "react";
import { useAuth } from "../store/useAuth";

export default function LoginComponents() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const { login, loading, error } = useAuth();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    login(loginForm.email, loginForm.password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email"
        onChange={(e) =>
          setLoginForm({ ...loginForm, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="password"
        onChange={(e) =>
          setLoginForm({ ...loginForm, password: e.target.value })
        }
      />

      <button type="submit">
        {loading ? "loading..." : "כניסה"}
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}