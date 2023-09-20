import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";

const App = () => {
    return (
        <div className="App">
            <Rating/>
            <Accordion/>
        </div>
    );
}

export default App;
