import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>This is root route</h1>,
        children: [
            {
                index: true,
                element: <h1>This is home</h1>
            }
        ]
    },
    {
        path: 'news',
        element: <h1>this is news layout</h1>
    },
    {
        path: '/auth-layout',
        element: <h1>This is auth layout</h1>
    }
])