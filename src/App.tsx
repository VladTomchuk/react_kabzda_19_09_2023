import React from 'react';
import './App.css';
import {OnOff} from "./components/OnOff";
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";

const App = () => {
    return (
        <div className="App">

            <Rating value={5}/>
            <OnOff/>
            {/*<PageTitle title={"This is my first article"}/>*/}
            {/*<div><h3>Article 1</h3></div>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            <Accordion title={"Menu"}/>
            <Accordion title={"Users"}/>


        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    return (
        <div><h1>{props.title}</h1></div>
    )
}
export default App;
