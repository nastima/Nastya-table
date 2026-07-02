import {useReactTable, getCoreRowModel} from '@tanstack/react-table';
import {useGetUsersQuery} from "../../../store/api/usersApi.ts";
import {columns} from "./columns.ts";
import {useSelector} from "react-redux";
import {selectBigUsers} from "../../../store/users/usersSelectors.ts";

export const useUsersTable = () => {
   const {isLoading} = useGetUsersQuery();

    const bigData = useSelector(selectBigUsers);

    const table = useReactTable({
        data: bigData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return { table, isLoading };
};