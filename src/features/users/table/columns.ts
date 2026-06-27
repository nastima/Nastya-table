import type {ColumnDef} from '@tanstack/react-table';
import type {User} from '../../../store/api/types.ts';

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorFn: (row) => `${row.firstName} ${row.lastName}`,
        header: 'Name',
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
    {
        accessorKey: 'age',
        header: 'Age',
    },
    {
        accessorFn: (row) => row.company?.name,
        header: 'Company',
    },
    {
        accessorFn: (row) => row.address?.city,
        header: 'City',
    }
];