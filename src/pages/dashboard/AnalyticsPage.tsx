import { useState } from "react";
import { UsersTable } from '../../features/users/table/UsersTable.tsx';
import { Dashboard } from "../../features/dashboard/Dashboard.tsx";
import { useWebSocket } from "../../hooks/useWebSocket.ts";
import {useGetUsersQuery} from "../../store/api/usersApi.ts";
import {useSelector} from "react-redux";
import {selectAllUsers} from "../../store/users/usersSelectors.ts";

export const AnalyticsPage = () => {
    useWebSocket();

    const [selectedCity, setSelectedCity] = useState('all');

    const { isLoading } = useGetUsersQuery();
    const users = useSelector(selectAllUsers);

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    return (
        <>
            <Dashboard
                users={users}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
            />

            <UsersTable
                selectedCity={selectedCity}
            />
        </>
    )
}