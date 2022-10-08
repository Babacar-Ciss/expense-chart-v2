import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 18px;
    position: relative;

    @media only screen and (max-width : 375px) { 
        margin-right: 12px;
    }

    &:last-child {
        margin-right: 0;
    }

`

const ChartStyle = styled.div`
    width: 50px;
    height: ${props => props.heightOfChart}px;
    background-color: ${props => props.currentDay === props.day ? "#76B5BC" :"#EC755D"};
    border-radius : 5px; 
    cursor  : pointer ;


    @media only screen and (max-width : 375px) { 
        width: 33px;
    }

    &::after {
        content : "$${props => props.amount}";
        position: absolute;
        top: -50px;
        left: 50%;
        transform: translateX(-50%);
        padding: 8px;
        border-radius: 5px;

        display: ${props => props.showTopAmount || props.currentDay === props.day ? "flex" : "none"}; ;
        align-items: center;
        justify-content: center;

        color: #FFFBF6;
        font-size: 18px;
        line-height: 23px;
        font-weight: 700;
        background-color: #382314;


        @media only screen and (max-width : 375px) { 
            top: -35px;
            font-size: 15px;
            line-height: 18px;
            padding: 5px;
        }

    }
`

const DAY = styled.p`
    color : #92857A;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    width: 100%;
    text-align: center;
    margin-top: 8px;

    @media only screen and (max-width : 375px) { 
        font-size: 12px;
    }
`


let currentDay = new Date().toLocaleDateString('en-us', { weekday:"short"}).toLocaleLowerCase();


const Chart = ({heightOfChart, day, amount}) => {

    const [showTopAmount, setShowTopAmount] = useState(false);


    return (
        <Wrapper>
            <ChartStyle heightOfChart={heightOfChart}
                        currentDay = {currentDay}
                        day = {day}
                        amount = {amount}
                        showTopAmount = {showTopAmount}
                        onMouseOver = {() => {setShowTopAmount(true)}}
                        onMouseOut = {() => {setShowTopAmount(false)}}
                        > 
            </ChartStyle>
            <DAY>{day}</DAY>
        </Wrapper>
    );
}

export default Chart;
