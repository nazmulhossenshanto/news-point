import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <h1 className="text-4xl text-red-500">This is home</h1>
            }
        ]
    },
    {
        path: 'news',
        element: <h1>this is news layout</h1>
    },
    {
        path: '/auth',
        element: <h1>This is auth layout</h1>
    },
    {
        path : '/*',
        element: <ErrorPage></ErrorPage>
    }
])