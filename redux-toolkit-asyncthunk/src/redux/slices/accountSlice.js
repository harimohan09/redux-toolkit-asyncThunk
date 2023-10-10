import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserAccount = createAsyncThunk(
    "account/getUser",
    async (userId, thunkAPI) => {
        const response = await fetch(
            ` http://localhost:8080/accounts/${userId}`
        );
        const data = await response.json();
        console.log("dta", data);
        return data.amount;
    }
);

export const accountSlice = createSlice({
    name: "account",
    initialState: {
        amount: 0,
    },
    reducers: {
        increment: (state) => {
            state.amount += 1;
        },
        decrement: (state) => {
            state.amount -= 1;
        },
        incrementByAmount: (state, action) => {
            state.amount += Number(action.payload);
            // console.log("action", action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUserAccount.fulfilled, (state, action) => {
            state.amount = action.payload;
        });
    },
});

export const { increment, decrement, incrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;
