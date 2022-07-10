import "./TotalExpensesWeek.css";
import datas from "../../data.json"

const TotalExpensesWeek = () => {
    const arrTotalExpense = datas.map(data => data.amount);
    const totalExpense = arrTotalExpense.reduce((pre,curr) => pre + curr,0)


return(
    <div>
    <div className="Line"></div>
    
    <div className="TotalExpensesWeek">
    
      
    <div className="Total">
        <p>Total this mounth</p>
        <h1> {`$${totalExpense}`} </h1>
    </div>

    <div className="Last-month">
        <p>from last month</p>
        <h4>+2.4%</h4>
    </div>

    </div>
    </div>
)

}

export default TotalExpensesWeek;
