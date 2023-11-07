import React, {useState} from "react";
import '../../App.css';

type OnOffPropsType = {
    on: boolean,
    setOn: (on: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

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
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        border: "1px solid black",
        borderRadius: "10px",
        display: "inline-block",
        marginLeft: "3px",
        backgroundColor: props.on ? "green" : "red"
    }

    const onClicked = () => {
        props.setOn(true)
    }
    const offClicked = () => {
        props.setOn(false)
    }

    return (
        <div style={onOffContainer}>
            <div style={onStyle} onClick={onClicked}>On
            </div>
            <div style={offStyle} onClick={offClicked}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}