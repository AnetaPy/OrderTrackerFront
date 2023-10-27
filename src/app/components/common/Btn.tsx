import React from "react";
import {Icon} from "@/components/common/Icon";
import './Btn.css';
interface Props {
    text:string;
    src?: string;
    alt?:string;
}
export const Btn = (props: Props) => {
    return <button>
        {props.src ? <Icon src={props.src} alt={props.alt} /> : null}
        {props.text}
    </button>
}