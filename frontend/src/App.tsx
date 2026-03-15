import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import ProtectedRoute from "./components/RoutePermission";
import RegisterAdmin from "./pages/RegisterAdmin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/register" element={<RegisterAdmin/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
