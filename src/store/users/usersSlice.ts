import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {User} from "../api/types.ts";

export const usersAdapter = createEntityAdapter<User>();
export const initialState = usersAdapter.getInitialState();

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<User[]>) {
            usersAdapter.setAll(state, action.payload);
        },
        addUser(state, action: PayloadAction<User>) {
            usersAdapter.addOne(state, action.payload);
        },
        updateUser(
            state,
            action: PayloadAction<{
                id: number;
                changes: Partial<User>;
            }>
        ) {
            const currentUser = state.entities[action.payload.id];
            if(!currentUser) return;

            const incomingUpdatedAt = action.payload.changes.updatedAt;
            if (
                incomingUpdatedAt &&
                incomingUpdatedAt < currentUser.updatedAt
            ) {
                console.log(
                    "Ignored outdated update",
                    {
                        id: action.payload.id,
                        current: currentUser.updatedAt,
                        incoming: incomingUpdatedAt,
                    }
                );
                return;
            }

            console.log(
                "Applied update",
                action.payload
            );
            
            usersAdapter.updateOne(state, action.payload);
        },
        removeUser(state, action: PayloadAction<number>) {
            usersAdapter.removeOne(state, action.payload);
        },
    },
});

export const {setUsers, updateUser, addUser, removeUser} = usersSlice.actions;

export default usersSlice.reducer;
