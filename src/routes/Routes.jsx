import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../pages/ErrorPage";
import AllreadyLogin from "../pages/AllreadyLogin";
import AddPlaces from "../pages/AddPlaces";
import PlaceDetails from "../pages/PlaceDetails/";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5007/places/')
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
            },
            {
                path: '/addplaces',
                element: <AddPlaces />
            },
            {
                path: '/places/:id',
                element: <PlaceDetails />,
                loader: ({params}) => fetch(`http://localhost:5007/places/${params.id}`)
            }
        ]
    }
])