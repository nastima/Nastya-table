import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'usersApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
    }),

    endpoints: (builder) => ({
        getUsers: builder.query<any, void>({
            query: () => '/users',
        }),
    }),
});

export const {useGetUsersQuery} = usersApi;