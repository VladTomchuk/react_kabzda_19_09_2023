import React, {useState} from "react";


type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: () => void
}
export const ControlledAccordion = (props: AccordionPropsType) => {

    //let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle setCollapsed={props.setCollapsed} title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={
        props.setCollapsed
    }>{props.title}</h3>
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}