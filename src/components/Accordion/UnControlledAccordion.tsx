import React, {useState} from "react";


type AccordionPropsType = {
    title: string
    //

}
export const UnControlledAccordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle setCollapsed={setCollapsed} title={props.title} collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={() => {props.setCollapsed(!props.collapsed)}}>{props.title}</h3>}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}