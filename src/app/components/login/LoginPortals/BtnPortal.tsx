import React from "react";

export const BtnPortal = (props) => {
    return (
        <button>
            <div className="Login_button">
                <img src={props.src} alt={props.alt}/>
                <p>{props.text}</p>
            </div>
        </button>
    )
};