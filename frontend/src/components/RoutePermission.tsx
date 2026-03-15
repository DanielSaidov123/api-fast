import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../store/useAuth';

interface ProtectedRouteProps {
    allowedRoles: ("user" | "admin")[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
    const { user } =  useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    const hasAccess = allowedRoles.includes(user.role);

    if (!hasAccess) {
        return <Navigate to={user.role === "admin" ? "/HomeAdmin" : "/"} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;