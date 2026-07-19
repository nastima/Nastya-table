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
        size: 160
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
    },
    {
        accessorKey: 'status',
        header: 'Status',
        size: 120,
        cell: ({row}) => {
            const status = row.original.status;
            return status === 'online'
                ? '🟢 Online'
                : '⚪ Offline';
        }
    },
    {
        accessorKey: 'score',
        header: 'Score',
        size: 100,
    },
    {
        accessorKey: 'updatedAt',
        header: 'Updated',
        size: 150,
        cell: ({row}) => {
            return new Date(
                row.original.updatedAt
            ).toLocaleTimeString();
        }
    }
];