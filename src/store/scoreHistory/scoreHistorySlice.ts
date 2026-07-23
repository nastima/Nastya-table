import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type ScorePoint = {
    value: number;
    time: string;
}

type State = {
    points: ScorePoint[];
}

const initialState: State = {
    points: [],
}

const scoreHistorySlice = createSlice({
    name: 'scoreHistory',
    initialState,
    reducers: {
        addScorePoint(
            state,
            action: PayloadAction<number>
        ) {
            state.points.push({
                value: action.payload,
                time: new Date().toLocaleTimeString(),
            });

            if(state.points.length > 20) {
                state.points.shift();
            }
        },
    },
});

export const {
    addScorePoint
} = scoreHistorySlice.actions;

export default scoreHistorySlice.reducer;