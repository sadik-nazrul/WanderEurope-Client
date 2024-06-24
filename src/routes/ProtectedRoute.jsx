import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children, redirectTo }) => {
    
    const { user } = useContext(AuthContext);
    return user ? <Navigate to={redirectTo} /> : children;
};

export default ProtectedRoute;