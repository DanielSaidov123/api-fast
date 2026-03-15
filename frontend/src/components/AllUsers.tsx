import { useEffect, useState } from "react";
import { useUsersSrore } from "../store/useUsersStore";
import {type UpdateUserData } from "../store/useUsersStore"; // האינטרפייס שהגדרנו

export default function AllUsers() {
  const { users, loading, error, getAllUsers, deleteUserByID, updateUserByID } = useUsersSrore();
  const [editUser, setEditUser] = useState<{ id: string; fullName: string; email: string; role: "admin" | "user" } | null>(null);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.createdAt}</td>
              <td>
                <button style={{ color: "red" }} onClick={() => deleteUserByID(user._id)}>Delete</button>
                <button onClick={() => setEditUser({ id: user._id, fullName: user.fullName, email: user.email, role: user.role })}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editUser && (
        <div style={{ marginTop: 20, border: "1px solid gray", padding: 10 }}>
          <h3>Edit User</h3>
          <input
            type="text"
            value={editUser.fullName}
            onChange={e => setEditUser({ ...editUser, fullName: e.target.value })}
            placeholder="Full Name"
          />
          <input
            type="email"
            value={editUser.email}
            onChange={e => setEditUser({ ...editUser, email: e.target.value })}
            placeholder="Email"
          />
          <select
            value={editUser.role}
            onChange={e => setEditUser({ ...editUser, role: e.target.value as "admin" | "user" })}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button
            onClick={() => {
              const data: UpdateUserData = {
                fullName: editUser.fullName,
                email: editUser.email,
                role: editUser.role,
              };
              updateUserByID(editUser.id, data);
              setEditUser(null); 
            }}
          >
            Save
          </button>
          <button onClick={() => setEditUser(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}