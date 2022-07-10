import "./SpendingCard.css";
import ChartsContainer from "../ChartsContainer/ChartsContainer";
import TotalExpensesWeek from "../TotalExpensesWeek/TotalExpensesWeek";


const SpendingCard = () => {
    return (
        <div className="SpendingCard">
            <h1>Spending - Last 7 days</h1>
            <ChartsContainer />
            <TotalExpensesWeek />
        </div>
    )
}

export default SpendingCard