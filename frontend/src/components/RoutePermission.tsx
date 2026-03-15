import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../store/useAuth';

interface ProtectedRouteProps {
    allowedRoles: ("user" | "admin")[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    console.log("No user, redirecting to /");
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  console.log("User role:", user.role);
  const hasAccess = allowedRoles.includes(user.role);

  if (!hasAccess) {
    return <Navigate to={user.role === "admin" ? "/HomeAdmin" : "/"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;