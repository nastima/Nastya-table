import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {UsersResponse} from "./types.ts";


export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
    }),

    endpoints: (builder) => ({
        getUsers: builder.query<UsersResponse, void>({
            query: () => '/users',
        }),
    }),
});

export const {useGetUsersQuery} = usersApi;