import React from "react";
import {BtnPortal} from './BtnPortal'
import './LoginPortals.css';

export const LoginPortals  = () => {
    return(
            <div className="Login_portals">
                <BtnPortal src="/images/icon_google.png" alt="Google icon" text="Zaloguj się z Google"/>
                <BtnPortal src="/images/icon_github.png" alt="GitHub icon" text="Zaloguj się z GitHub"/>
            </div>
    )
};