import './Header.css';
import React from "react";

interface Props {
    text: string;
}

export const Header = (props: Props) => {
    return (
        <div className="Header">
            <h1>{props.text}</h1>
            <a href="/home"><img src="/images/logo.png" alt="Logo OrderTracker"/></a>

        </div>
    )
}