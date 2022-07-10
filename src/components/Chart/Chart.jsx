import { useState} from "react";
import "./Chart.css";

const viewPort = window.innerWidth;


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
                 width={viewPort <= 375 ? 33 : 52} 
                 height= {props.heightOfChart}>

              <rect ry={viewPort <= 375 ? 3 : 5}  
                    width={viewPort <= 375 ? 33 : 50} 
                    height={props.heightOfChart} 
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