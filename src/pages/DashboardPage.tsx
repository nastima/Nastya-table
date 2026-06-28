import {UsersTable} from '../features/users/table/UsersTable.tsx';
import {Dashboard} from "../features/dashboard/Dashboard.tsx";

export const DashboardPage = () => {
    return (
        <>
            <Dashboard/>
            <UsersTable/>
        </>
    )
}