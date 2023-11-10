"use client"

import './page.css'
import {LoginIntroduction} from "@/components/common/LoginIntroduction/LoginIntroduction";
import {LoginForm} from "@/components/login/LoginForm/LoginForm";
const Signin = () => {
    return (
        <>
            <LoginIntroduction/>
            <div className="Login_container">
                <img src="/images/logo.png" alt=""/>
                <h2>Logowanie</h2>
                <LoginForm/>
            </div>
        </>
    )
}
export default Signin;