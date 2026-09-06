import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import CategoryNews from "../Components/HomeLayout/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader : ()=>fetch('/news.json'),
            }
        ]
    },
    {
        path: 'news',
        element: <h1>this is news layout</h1>
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path : '/*',
        element: <ErrorPage></ErrorPage>
    }
])