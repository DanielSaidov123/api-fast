import { useState } from "react";
import { useRequest } from "../hooks/useRequedt";
import { loginApi } from "../api/axios";
import { useAuth } from "../store/useAuth";

interface LoginResponse {
  data: {
    message : string,
    role: "user" | "admin";
  };
}

export default function LoginComponents() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { request, loading, error, success } = useRequest<
    LoginResponse | undefined
  >();
  const { loginUser } = useAuth();
  async function hndelsubmit(e: React.FormEvent) {
    e.preventDefault();

    const data = await request(() => loginApi(login));
    if (data?.data?.role) {
      loginUser(data.data?.role);
      console.log(data.data?.role);
    }
  }
  return (
    <div>
      <form onSubmit={hndelsubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />
        <button type="submit">
          {loading ? <p>loading...</p> : <p>כניסה</p>}
        </button>
        {error && <p>{error}</p>}
        {success && <p>כניסה</p>}
      </form>
    </div>
  );
}
