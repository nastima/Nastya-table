import {LoginPage} from "../pages/LoginPage.tsx";
import {DashboardPage} from "../pages/DashboardPage.tsx";
import {createBrowserRouter} from 'react-router-dom';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
    },
    {
        path: '/dashboard',
        element: <DashboardPage />,
    }
])