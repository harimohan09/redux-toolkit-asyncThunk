import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    getUserAccount,
    increment,
    incrementByAmount,
} from "../redux/slices/accountSlice";
import { decrement } from "../redux/slices/accountSlice";
// import { useSelector } from "react-redux";

const Account = () => {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    console.log("value", value);
    // const amount = useSelector((state) => state.account.amount);
    return (
        <div>
            <h1>Account Component</h1>
            {/* <h2>Total Amount : {amount}</h2> */}
            <button onClick={() => dispatch(increment())}>
                Increment in amount
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement in amount
            </button>
            <input
                type="number"
                placeholder="Only Number"
                onChange={(e) => setValue(e.target.value)}
            ></input>
            <button onClick={() => dispatch(incrementByAmount(value))}>
                Increment in amount
            </button>
            <button onClick={() => dispatch(getUserAccount(1))}>
                Get User
            </button>
        </div>
    );
};

export default Account;
