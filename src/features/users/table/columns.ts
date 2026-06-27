import type {ColumnDef} from '@tanstack/react-table';
import type {User} from '../../../store/api/types.ts';

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
        size: 70
    },
    {
        accessorFn: (row) => `${row.firstName} ${row.lastName}`,
        header: 'Name',
        size: 220
    },
    {
        accessorKey: 'email',
        header: 'Email',
        size: 300
    },
    {
        accessorKey: 'age',
        header: 'Age',
        size: 80
    },
    {
        accessorFn: (row) => row.company?.name,
        header: 'Company',
        size: 250
    },
    {
        accessorFn: (row) => row.address?.city,
        header: 'City',
        size: 180
    }
];