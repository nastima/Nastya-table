import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { usersAdapter } from './usersSlice';

export const usersSelectors = usersAdapter.getSelectors<RootState>(
    (state) => state.users
);

export const selectAllUsers = usersSelectors.selectAll;

export const selectBigUsers = createSelector(
    [selectAllUsers],
    (users) => {
        if (users.length === 0) return [];

        const result = [];

        for (let i = 0; i < 50000; i++) {
            const user = users[i % users.length];

            result.push({
                ...user,
                id: i + 1,
            });
        }

        return result;
    }
);