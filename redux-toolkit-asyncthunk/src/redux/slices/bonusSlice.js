import { createSlice } from "@reduxjs/toolkit";

export const bonusSlice = createSlice({
    name: "bonus",
    initialState: {
        points: 0,
    },
    reducers: {
        increment: (state) => {
            state.points += 1;
        },
        decrement: (state) => {
            state.points -= 1;
        },
        // incrementByAmount: (state, action) => {
        //     state.amount += action.payload;
        // },
    },
});

export const { increment, decrement } = bonusSlice.actions;

export default bonusSlice.reducer;
