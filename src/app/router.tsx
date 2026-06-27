import {LoginPage} from "../pages/LoginPage.tsx";
import {DashboardPage} from "../pages/DashboardPage.tsx";
import {createBrowserRouter} from 'react-router-dom';
import {ProtectedRoute} from '../routes/ProtectedRoute.tsx';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardPage/>,
            },
        ],
    },
],
    {
        basename: import.meta.env.BASE_URL,
    }
);