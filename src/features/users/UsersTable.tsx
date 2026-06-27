import {useGetUsersQuery} from "../../store/api/usersApi.ts";
import {Table, TableBody, TableCell, TableHead, TableRow, Paper} from '@mui/material';
import type {User} from "../../store/api/types.ts";
import {mockUsers} from "./mockusers.ts";


export const UsersTable = () => {
    const {data, isLoading} = useGetUsersQuery();
    const bigData = mockUsers(data?.users || [], 3000)

    if(isLoading) return <div>Loading...</div>

    return (
        <Paper sx={{padding: 2}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>City</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {bigData.map((user: User) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>
                                {user.firstName} {user.lastName}
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.age}</TableCell>
                            <TableCell>{user.company?.name}</TableCell>
                            <TableCell>{user.address?.city}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};