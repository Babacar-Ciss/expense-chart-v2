import logo from "../../assets/images/logo.svg";
import "./Balance.css";
import datas from '../../data.json'


const Balance = () => {
    const arrTotalExpense = datas.map(data => data.amount);
    const totalBalance = 921.48  - arrTotalExpense.reduce((pre,curr) => pre + curr,0);
    
    return (
        <div className="BalanceCard">
            <div className="BalanceCard-balance">
                <p>My balance</p>
                <h1>{`$${(totalBalance).toFixed(2)}`}</h1>
            </div>
        <img src= {logo} alt="logo"></img>
        </div>
    )
}

export default Balance;
