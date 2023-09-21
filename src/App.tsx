import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";

const App = () => {
    return (
        <div className="App">
            <PageTitle title={"This is my first article"}/>
            {/*<div><h3>Article 1</h3></div>*/}
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion title={"Menu"} collapsed={false}/>
            <Accordion title={"Users"} collapsed={true}/>
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
