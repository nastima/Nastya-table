import {UsersTable} from '../features/users/table/UsersTable.tsx';
import {Dashboard} from "../features/dashboard/Dashboard.tsx";
import {useWebSocket} from "../hooks/useWebSocket.ts";

export const DashboardPage = () => {
    useWebSocket();
    return (
        <>
            <Dashboard/>
            <UsersTable/>
        </>
    )
}