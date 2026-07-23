import type {RootState} from "../store.ts";
import {createSelector} from "@reduxjs/toolkit";

const selectScoreHistoryState = (
    state: RootState
) => state.scoreHistory

export const selectScoreHistory = createSelector(
    [selectScoreHistoryState],
    (scoreHistory) => scoreHistory.points
);