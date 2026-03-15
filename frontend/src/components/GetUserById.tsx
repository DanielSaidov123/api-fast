import React, { useState } from "react";
import { useUsersSrore } from "../store/useUsersStore";

export default function GetUserById() {
  const [inputId, setInputId] = useState("");

  const { getUserByID, userID, loading, error } = useUsersSrore();
  function hndleSubmit(e: React.FormEvent) {
    e.preventDefault();
    getUserByID(inputId);
    console.log(userID);
  }
  console.log(userID);
  return (
    <div>
      <form onSubmit={hndleSubmit}>
        <input
          type="text"
          placeholder="Enter ID"
          onChange={(e) => setInputId(e.target.value)}
        />
        <button type="submit">
          {loading ? <p>loading...</p> : <p>תביא</p>}
        </button>
        {error && <p>{error}</p>}
      </form>
      {userID && inputId !== "" ? (
  <table >
    <thead>
      <tr >
        <th>id</th>
        <th>fullName</th>
        <th>email</th>
        <th>role</th>
        <th>create</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{userID._id}</td>
        <td>{userID.fullName}</td>
        <td>{userID.email}</td>
        <td>{userID.role}</td>
        <td>{userID.createdAt}</td>
      </tr>
    </tbody>
  </table>
) : null}
    </div>
  );
}
