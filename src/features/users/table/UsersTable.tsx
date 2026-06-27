import {Table, TableBody, TableCell, TableHead, TableRow, Paper} from '@mui/material';
import {flexRender} from '@tanstack/react-table';
import {useUsersTable} from "./useUsersTable.ts";


export const UsersTable = () => {
    const {table, isLoading} = useUsersTable();


    if(isLoading) return <div>Loading...</div>

    return (
        <Paper sx={{padding: 2}}>
            <Table>
                <TableHead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) =>(
                                <TableCell key={header.id}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>

                <TableBody>
                    {table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};