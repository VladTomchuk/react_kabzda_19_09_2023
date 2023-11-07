import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/Accordion/UnControlledAccordion";
import {UnControlledRating} from "./components/Rating/UnControlledRating";
import {ControlledAccordion} from "./components/Accordion/ControlledAccordion";
import {ControlledRating, RatingValuesType} from "./components/Rating/ControlledRating";

const App = () => {

    let [ratingValue, setRatingValue] = useState<RatingValuesType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false)
    return (
        <div className="App">

            <ControlledAccordion title={"Controlled"} collapsed={collapsed} setCollapsed={() => {
                setCollapsed(!collapsed)
            }}/>
            <ControlledRating value={ratingValue} onClick={setRatingValue}/>
            <OnOff on={on} setOn={(on)=>{setOn(on)}}/>

            {/*<UnControlledAccordion title={"UnControlled"}/>*/}
            {/*<UnControlledRating/>*/}

        </div>
    );
}
export default App;
