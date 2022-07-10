import { useState} from "react";
import "./Chart.css";
import datas from "../../data.json"




const Chart = (props) => {
    

    const [showTopAmount, setShowTopAmoung] = useState(false);

    let date = new Date().toLocaleDateString('en-us', { weekday:"short"}).toLocaleLowerCase();
    const activeStyle = "#B4E0E5";
    const normalStyle = "#EC755D";

    return (
        <div className="Chart" >
            <h4> {props.day} </h4>
            <svg onMouseOver={() => {setShowTopAmoung(true) }}
                 onMouseOut= {() => {setShowTopAmoung(false) }} 
                 width="50" height= {props.heightOfChart}>
              <rect ry="10" width="51" height={props.heightOfChart} 
                            fill= {date === props.day ? activeStyle : normalStyle} />
            </svg>

            {date === props.day 
                        ? <p>{"$"+props.amount}</p> :
                (showTopAmount ? <p>{"$"+props.amount}</p> : null)
            }       
        </div> 
    ) 
}

export default Chart;