import {useMemo} from "react";
import type {User} from '../store/api/types.ts';

export const useFilteredUsers = (
    users: User[],
    selectedCity: string
) => {
    return useMemo(() => {
        if(selectedCity === 'all') return users;

        return users.filter(
            user => (user.address?.city ?? 'Unknown') === selectedCity
        );
    },[users, selectedCity]);
}