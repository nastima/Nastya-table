import { useState } from "react";
import { UsersTable } from '../../features/users/table/UsersTable.tsx';
import { Dashboard } from "../../features/dashboard/Dashboard.tsx";
import { useWebSocket } from "../../hooks/useWebSocket.ts";

export const AnalyticsPage = () => {
    useWebSocket();

    const [selectedCity, setSelectedCity] = useState('all');

    return (
        <>
            <Dashboard
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
            />

            <UsersTable
                selectedCity={selectedCity}
            />
        </>
    )
}