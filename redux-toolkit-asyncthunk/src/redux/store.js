import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountSlice";
import bonusReducer from "./slices/bonusSlice";

export const store = configureStore({
    reducer: {
        account: accountReducer,
        bonus: bonusReducer,
    },
});
