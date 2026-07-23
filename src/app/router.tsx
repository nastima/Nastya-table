import {LoginPage} from "../pages/LoginPage.tsx";
import {AnalyticsPage} from "../pages/dashboard/AnalyticsPage.tsx";
import {createBrowserRouter} from 'react-router-dom';
import {ProtectedRoute} from '../routes/ProtectedRoute.tsx';
import {DashboardLayout} from '../pages/dashboard/DashboardLayout.tsx'
import {MapPage} from "../pages/dashboard/MapPage.tsx";
import {ScenarioPage} from "../pages/dashboard/ScenarioPage/ScenarioPage.tsx";
import {ReportsPage} from "../pages/dashboard/ReportsPage.tsx";


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
                element: <DashboardLayout/>,

                children: [
                    {
                        index: true,
                        element: <AnalyticsPage />,
                    },
                    {
                        path: 'map',
                        element: <MapPage />,
                    },
                    {
                        path: 'scenario',
                        element: <ScenarioPage />,
                    },
                    {
                        path: 'reports',
                        element: <ReportsPage />,
                    },
                ],
            },
        ],
    },
],
    {
        basename: import.meta.env.BASE_URL,
    }
);