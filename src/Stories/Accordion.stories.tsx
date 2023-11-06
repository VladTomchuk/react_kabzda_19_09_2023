import {action} from '@storybook/addon-actions';
import {ControlledAccordion} from "../components/Accordion/ControlledAccordion";
import React from "react";


export default {
    component: ControlledAccordion,
};

const onChangeHandler = action('onChange')
export const CollapsedAccordion = () => {
    return (
        <ControlledAccordion
            title={"Collapsed Accordion"}
            collapsed={true}
            setCollapsed={() => {
            }}
        />
    )
}

export const OpenedAccordion = () => {
    return <ControlledAccordion
        title={"Opened Accordion"}
        collapsed={false}
        setCollapsed={onChangeHandler}
    />
}