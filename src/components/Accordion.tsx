import React, {useState} from "react";


type AccordionPropsType = {
    title: string
    // collapsed: boolean
}
export const Accordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={() => {setCollapsed(!collapsed)}}>toggle</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <><h3>{props.title}</h3></>
    )
}

const AccordionBody = () => {
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}