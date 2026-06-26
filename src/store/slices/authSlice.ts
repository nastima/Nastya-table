import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

type AuthState = {
    isAuth: boolean;
    user: null | {
        email: string;
    };
    token: string | null;
}

const initialState: AuthState = {
    isAuth: false,
    user: null,
    token: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (
            state,
                action: PayloadAction<{email: string; token: string}>
        ) => {
            state.isAuth = true;
            state.user = {email: action.payload.email};
            state.token = action.payload.token;
        },

        logout: (state) => {
            state.isAuth = false;
            state.user = null;
            state.token = null;
        }
    }
});

export const {loginSuccess, logout} = authSlice.actions;
export default authSlice.reducer;