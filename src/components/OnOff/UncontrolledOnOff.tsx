import React, {useState} from "react";
import '../App.css';

type OnOffPropsType = {
    //switcher: boolean
}

export const OnOff = (props: OnOffPropsType) => {

    let [on, setOn] = useState(false)

    const onOffContainer = {
        padding: "15px"
    }

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        marginRight: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        border: "1px solid black",
        borderRadius: "10px",
        display: "inline-block",
        marginLeft: "3px",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div style={onOffContainer}>
            <div style={onStyle} onClick={() => {
                setOn(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                setOn(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}