import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff";
import {UnControlledAccordion} from "./components/Accordion/UnControlledAccordion";
import {UnControlledRating} from "./components/Rating/UnControlledRating";
import {ControlledAccordion} from "./components/Accordion/ControlledAccordion";
import {ControlledRating, RatingValuesType} from "./components/Rating/ControlledRating";

const App = () => {

    let [ratingValue, setRatingValue] = useState<RatingValuesType>(0)

    return (
        <div className="App">

            <ControlledAccordion title={"Controlled"}/>
            <ControlledRating value={ratingValue} onClick={setRatingValue}/>

            <OnOff/>
            {/*<PageTitle title={"This is my first article"}/>*/}
            {/*<div><h3>Article 1</h3></div>*/}

            {/*<UnControlledAccordion title={"UnControlled"}/>*/}
            {/*<UnControlledRating/>*/}


        </div>
    );
}


// type PageTitlePropsType = {
//     title: string
// }

// const PageTitle = (props: PageTitlePropsType) => {
//     return (
//         <div><h1>{props.title}</h1></div>
//     )
// }
export default App;
