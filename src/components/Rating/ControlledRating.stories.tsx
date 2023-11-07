import {action} from '@storybook/addon-actions';
import React, {useState} from "react";
import {ControlledRating, RatingValuesType} from "./ControlledRating";


export default {
    title: 'Rating stories',
    component: ControlledRating,
};

const onChangeHandler = action('onClick')
export const EmptyStars = () => {
    return (
        <ControlledRating
            value={0}
            onClick={onChangeHandler}
        />
    )
}
export const Rating1 = () => {
    return (
        <ControlledRating
            value={1}
            onClick={onChangeHandler}
        />
    )
}
export const Rating2 = () => {
    return (
        <ControlledRating
            value={2}
            onClick={onChangeHandler}
        />
    )
}
export const Rating3 = () => {
    return (
        <ControlledRating
            value={3}
            onClick={onChangeHandler}
        />
    )
}
export const Rating4 = () => {
    return (
        <ControlledRating
            value={4}
            onClick={onChangeHandler}
        />
    )
}
export const Rating5 = () => {
    return (
        <ControlledRating
            value={5}
            onClick={onChangeHandler}
        />
    )
}
export const RatingChanging = ()=>{
    const [rating, setRating]=useState<RatingValuesType>(3)
    return <ControlledRating
        value={rating}
        onClick={setRating}
    />
}
