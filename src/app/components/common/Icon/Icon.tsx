import React from "react";
import './Icon.css';

interface Props {
    src: string,
    alt: string | undefined,
}
export const Icon = (props:Props) => {
    return <img src={props.src} alt={props.alt}/>
}