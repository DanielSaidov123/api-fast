import React, { useState } from "react";
import { useAuth } from "../store/useAuth";

 
 

export function RegisterComponents() {
  const [register, setRegister] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "user",
  });

  const {registerStore , error , loading} = useAuth()
  async function hndleSubmit(e: React.FormEvent) {
    e.preventDefault();
    registerStore(register.fullName , register.email,register.password,register.role)
     
  }

  return (
    <div>
      <form onSubmit={hndleSubmit}>
        <input
          type="text"
          placeholder="fullName"
          required
          onChange={(e) =>
            setRegister({ ...register, fullName: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="email"
          required
          onChange={(e) => setRegister({ ...register, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          required
          onChange={(e) =>
            setRegister({ ...register, password: e.target.value })
          }
        />
        <select
          name="role"
          id="role"
          onChange={(e) => setRegister({ ...register, role: e.target.value })}
        >
          <option value="role">user</option>
          <option value="role">admin</option>
        </select>
        <button type="submit">{loading?<p>loading...</p>:<p>create user</p>}</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
