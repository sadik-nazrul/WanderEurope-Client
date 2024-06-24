import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../pages/ErrorPage";
import AllreadyLogin from "../pages/AllreadyLogin";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: (
                    <ProtectedRoute redirectTo='/logedin'>
                        <Login />
                    </ProtectedRoute>
                )
            },
            {
                path: '/register',
                element: (
                    <ProtectedRoute redirectTo='/logedin'>
                        <Register />
                    </ProtectedRoute>
                )
            },
            {
                path: '/logedin',
                element: <AllreadyLogin />
            }
        ]
    }
])