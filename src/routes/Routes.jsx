import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import AllreadyLogin from "../pages/AllreadyLogin";
import AddPlaces from "../pages/AddPlaces";
import PlaceDetails from "../pages/PlaceDetails/";
import PrivateRouts from "./PrivateRoutes";
import MyPlaces from "../pages/MyPlaces";


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
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
                   
            },
            {
                path: '/loggedin',
                element: <AllreadyLogin />
            },
            {
                path: '/addplaces',
                element: <PrivateRouts>
                    <AddPlaces />
                </PrivateRouts>
            },
            {
                path: '/places/:id',
                element: <PrivateRouts>
                    <PlaceDetails />
                </PrivateRouts> ,
                loader: ({ params }) => fetch(`http://localhost:5007/places/${params.id}`)
            },
            {
                path: '/myplaces/user/:usernm',
                element: <PrivateRouts>
                    <MyPlaces />
                </PrivateRouts>,
                loader: ({ params }) => fetch(`http://localhost:5007/places/user/${params.usernm}`)
            }
        ]
    }
])