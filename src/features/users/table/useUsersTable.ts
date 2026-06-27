import {useMemo} from 'react'
import {useReactTable, getCoreRowModel} from '@tanstack/react-table';
import {useGetUsersQuery} from "../../../store/api/usersApi.ts";
import {columns} from "./columns.ts";

export const useUsersTable = () => {
    const {data, isLoading} = useGetUsersQuery();

    const users = useMemo(() => {
        return data?.users ?? [];
    }, [data]);

    const bigData = useMemo(() => {
        const result = [];

        for(let i=0; i< 3000 ; i++) {
            const user = users[i % users.length];

            result.push({
                ...user,
                id: i+1,
            });
        }
        return result;
    }, [users])

    const table = useReactTable({
        data: bigData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return { table, isLoading };
};