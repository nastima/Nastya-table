import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.ts';
import {usersApi} from './api/usersApi.ts';
import usersReducer from './users/usersSlice.ts';
import scoreHistoryReducer from './scoreHistory/scoreHistorySlice.ts';
import {scenarioApi} from "./api/scenarioApi.ts";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        scoreHistory: scoreHistoryReducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [scenarioApi.reducerPath]: scenarioApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(usersApi.middleware)
            .concat(scenarioApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;