import './Header.css';
import React from "react";
import Link from "next/link";

interface Props {
    text: string;
}

export const Header = (props: Props) => {
    return (
        <div className="Header">
            <h1>{props.text}</h1>
            <Link href="/home"><img src="/images/logo.png" alt="Logo OrderTracker"/></Link>
        </div>
    )
}