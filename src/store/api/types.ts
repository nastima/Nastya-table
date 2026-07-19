export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    phone: string;
    image: string;
    registeredAt: string;
    company: {
        name: string;
    };
    address: {
        city: string;
    };
    status: 'online' | 'offline';
    score: number;
    updatedAt: number;
}

export interface UsersResponse {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}