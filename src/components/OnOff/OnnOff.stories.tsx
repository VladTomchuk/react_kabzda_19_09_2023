import {action} from '@storybook/addon-actions';
import React, {useState} from "react";
import {OnOff} from "./OnOff";



export default {
    title: 'OnOff stories',
    component: OnOff,
};

const setOnCallback = action("Its clicked!")
export const OnMode = () => {
    return (
        <OnOff on={true} setOn={setOnCallback}
        />
    )
}
export const OffMode = () => {
    return (
        <OnOff on={false} setOn={setOnCallback}/>
    )
}
export const ModeChanging = ()=>{
    const [value, setValue]=useState<boolean>(true)
    return <OnOff on={value} setOn={setValue}/>
}