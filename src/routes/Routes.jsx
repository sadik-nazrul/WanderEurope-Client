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
import UpdatePlace from "../pages/UpdatePlace";
import AllPlaces from "../pages/AllPlaces";
import PlaceBycountry from "../pages/PlaceBycountry";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://wandereurope-server.vercel.app/countries')
            },
            {
                path: '/toures',
                element: <AllPlaces />,
                loader: () => fetch('https://wandereurope-server.vercel.app/places/')
            },
            {
                path: 'places/place/:countryname',
                element: <PlaceBycountry />,
                loader: ({params}) => fetch(`https://wandereurope-server.vercel.app/places/place/${params.countryname}`)
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
                path: '/myplaces/user/:usernm/:id',
                element: <PrivateRouts>
                    <UpdatePlace />
                </PrivateRouts>,
                loader: ({ params }) => fetch(`https://wandereurope-server.vercel.app/places/user/${params.usernm}/${params.id}`)
            },
            {
                path: '/places/:id',
                element: <PrivateRouts>
                    <PlaceDetails />
                </PrivateRouts>,
                loader: ({ params }) => fetch(`https://wandereurope-server.vercel.app/places/${params.id}`)
            },
            {
                path: '/myplaces/user/:usernm',
                element: <PrivateRouts>
                    <MyPlaces />
                </PrivateRouts>,
                loader: ({ params }) => fetch(`https://wandereurope-server.vercel.app/places/user/${params.usernm}`)
            }
        ]
    }
])