import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.ts';
import {usersApi} from './api/usersApi.ts';
import usersReducer from './users/usersSlice.ts'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;