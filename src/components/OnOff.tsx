import React from "react";
import '../App.css';

type OnOffPropsType = {
    switcher: boolean
}

export const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        marginRight: "2px",
        backgroundColor: props.switcher ? "green" : "white"
    }

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        backgroundColor: props.switcher ? "white" : "red"
    }

    const indicatorStyle = {
        width: "20px",
        height: "20px",
        border: "1px solid black",
        borderRadius: "10px",
        display: "inline-block",
        marginLeft: "3px",
        backgroundColor: props.switcher ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}