// import logo from "./logo.svg";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useSelector } from "react-redux";

function App() {
    const points = useSelector((state) => state.bonus.points);
    const amount = useSelector((state) => state.account.amount);
    return (
        <div>
            <h1>Amount: {amount}</h1>
            <h1>Points: {points}</h1>
            <Account />
            <Bonus />
        </div>
    );
}

export default App;
