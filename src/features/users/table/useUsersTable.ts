import {useReactTable, getCoreRowModel} from '@tanstack/react-table';
import {columns} from "./columns.ts";
import {useSelector} from "react-redux";
import {selectBigUsers} from "../../../store/users/usersSelectors.ts";
import {useMemo} from "react";

export const useUsersTable = (selectedCity: string) => {

    const users = useSelector(selectBigUsers);

    const bigData = useMemo(() => {
        if (selectedCity === 'all') {
            return users;
        }

        return users.filter(
            user =>
                (user.address?.city ?? 'Unknown') === selectedCity
        );
    }, [users, selectedCity]);

    const table = useReactTable({
        data: bigData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return { table };
};