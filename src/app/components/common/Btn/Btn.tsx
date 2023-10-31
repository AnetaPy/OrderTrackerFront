import React from "react";
import {Icon} from "@/components/common/Icon/Icon";
import './Btn.css';

interface Props {
    nameOfClass?: string;
    text: string;
    src?: string;
    alt?: string;
}

export const Btn = (props: Props) => {
    return <button className={props.nameOfClass}>
        {props.src ? <Icon src={props.src} alt={props.alt}/> : null}
        {props.text}
    </button>
}