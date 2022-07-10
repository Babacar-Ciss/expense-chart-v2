import Chart from "../Chart/Chart";
import "./ChartsContainer.css";
import datas from "../../data.json";

const ChartsContainer = () => {
     
    const chartsDisplay = 
        datas.map(data => {
            const dataStr = (data.amount * 2.87 ).toString();
            return (         
            <Chart amount = {data.amount} 
                   heightOfChart = {dataStr}
                   day = {data.day}
                   key = {data.amount+""+data.day}/>
            )
        })

    return (
        <div className="ChartsContainer">
        {chartsDisplay}
        </div>
    )
}

export default ChartsContainer;