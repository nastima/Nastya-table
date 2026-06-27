import type {User} from '../../store/api/types.ts';

export const mockUsers = (users: User[], count = 2000): User[] => {
    const result: User[] = [];

    for(let i=0; i< count; i++) {
        const user = users[i % users.length];

        result.push({
            ...user,
            id: i+1,
        });
    }

    return result;
}