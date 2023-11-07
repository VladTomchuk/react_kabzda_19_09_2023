import {action} from '@storybook/addon-actions';
import {ControlledAccordion} from "./ControlledAccordion";
import React, {useState} from "react";


export default {
    title: 'Accordion stories',
    component: ControlledAccordion,
};

const onChangeHandler = action('onChange')
export const CollapsedAccordion = () => {
    return (
        <ControlledAccordion
            title={"Collapsed Accordion"}
            collapsed={true}
            setCollapsed={onChangeHandler}
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
export const AccordionInMoution = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <ControlledAccordion
        title={"Users"}
        collapsed={collapsed}
        setCollapsed={() => setCollapsed(!collapsed)}
    />
}