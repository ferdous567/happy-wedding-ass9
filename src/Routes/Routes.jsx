
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Service from "../pages/Service/Service";
import ErrorPage from "../errorPage/ErrorPage";
import Login from "../signInOut/Login";
import Register from "../signInOut/Register";
import ServiceDetails from "../pages/Service/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


 

 export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/service.json')
            },
            {
                path: '/about',
                element: <PrivateRoute>
                    <About></About>
                </PrivateRoute>
            },
            {
                path: '/contact',
                element: <PrivateRoute>
                    <Contact></Contact>
                </PrivateRoute>
            },
            {
                path: '/service',
                element: <Service></Service>,
                loader: () => fetch('/service.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/serviceDetails/:id',
                element: <PrivateRoute>
                    <ServiceDetails></ServiceDetails>
                </PrivateRoute>
                
            }
        ]
    }
])

export default routes;