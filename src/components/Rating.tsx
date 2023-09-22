import React, {MouseEventHandler, useState} from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: RatingPropsType) => {

    let [rate, setRate] = useState(0)

    return (
        <div>
            <Star selected={rate > 0} value={1} setRate={setRate}/>
            <Star selected={rate > 1} value={2} setRate={setRate}/>
            <Star selected={rate > 2} value={3} setRate={setRate}/>
            <Star selected={rate > 3} value={4} setRate={setRate}/>
            <Star selected={rate > 4} value={5} setRate={setRate}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setRate: (value: 1 | 2 | 3 | 4 | 5) => void
}

const Star = (props: StarPropsType) => {
    return <span onClick={() => {props.setRate(props.value)}}>
        {props.selected ? <b>Star </b> : "Star "}
    </span>
}