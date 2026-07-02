import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {UsersResponse} from "./types.ts";
import {setUsers} from "../users/usersSlice.ts";


export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
    }),

    endpoints: (builder) => ({
        getUsers: builder.query<UsersResponse, void>({
            query: () => '/users',

            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled;
                    dispatch(setUsers(data.users));
                } catch (error) {
                    console.error(error);
                }
            }
        }),
    }),
});

export const {useGetUsersQuery} = usersApi;