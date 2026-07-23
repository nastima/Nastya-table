import {Paper} from '@mui/material';
import {flexRender} from '@tanstack/react-table';
import {useUsersTable} from "./useUsersTable.ts";
import { FixedSizeList } from 'react-window';
import type { ListChildComponentProps } from 'react-window';
import {memo} from "react";

type Props = {
    selectedCity: string;
};

export const UsersTable = memo(({ selectedCity}: Props) => {
    const {table} = useUsersTable( selectedCity);

    const rows = table.getRowModel().rows;
    const headers = table.getHeaderGroups()[0].headers;
    const totalWidth = table.getTotalSize();

    const Row = ({ index, style }: ListChildComponentProps) => {
        const row = rows[index];

        return (
            <div
                style={{
                    ...style,
                    display: "flex",
                    borderBottom: '1px solid gray',
                    alignItems: 'center',
                }}
            >
                {row.getVisibleCells().map((cell) => (
                    <div
                        key={cell.id}
                        style={{
                            width: cell.column.getSize(),
                            flexShrink: 0,
                            boxSizing: 'border-box',
                            padding: '12px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <Paper sx={{padding: 2}}>
            <div style={{ overflowX: 'auto' }}>
                <div style={{
                    width: totalWidth
                }}>
                    <div
                        style={{
                            display: 'flex',
                            fontWeight: 700,
                            borderBottom: '2px solid #000',
                        }}
                    >
                        {headers.map((header) => (
                            <div
                                key={header.id}
                                style={{
                                    width: header.getSize(),
                                    flexShrink: 0,
                                    boxSizing: 'border-box',
                                    padding: '12px',
                                }}
                            >
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                            </div>
                        ))}
                    </div>
                    <FixedSizeList
                        height={600}
                        width='100%'
                        itemSize={48}
                        itemCount={rows.length}
                    >
                        {Row}
                    </FixedSizeList>
                </div>
            </div>
        </Paper>
    );
});