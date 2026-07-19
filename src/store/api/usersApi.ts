import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {UsersResponse, User} from "./types.ts";
import {setUsers} from "../users/usersSlice.ts";
import {subDays} from "date-fns";


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
                    const users: User[] = data.users.map(user => ({
                        ...user,
                        registeredAt: subDays(
                            new Date(),
                            Math.floor(Math.random() * 365)
                        ).toISOString(),

                        status: Math.random() > 0.5
                            ? 'online'
                            : 'offline',

                        score: Math.floor(Math.random() * 100),

                        updatedAt: Date.now(),
                    }));

                    dispatch(setUsers(users))

                } catch (error) {
                    console.error(error);
                }
            }
        }),
    }),
});

export const {useGetUsersQuery} = usersApi;