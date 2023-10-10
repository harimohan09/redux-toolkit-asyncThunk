import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../redux/slices/bonusSlice";
import { decrement } from "../redux/slices/bonusSlice";
// import { useSelector } from "react-redux";

const Bonus = () => {
    const dispatch = useDispatch();
    // const points = useSelector((state) => state.bonus.points);
    return (
        <div>
            <h1>Bonus Component</h1>
            {/* <h2>totalPoints: {points}</h2> */}
            <button onClick={() => dispatch(increment())}>
                Increment in points
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement in points
            </button>
        </div>
    );
};

export default Bonus;
