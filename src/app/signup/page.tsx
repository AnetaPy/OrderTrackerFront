import React from "react";
import './page.css';
import {LoginIntroduction} from "@/components/common/LoginIntroduction";
import {SignupForm} from "@/components/signup/SignupForm/SignupForm";

const Signup = () => {
    return (
        <div className="Signup">
            <LoginIntroduction/>
            <SignupForm/>
        </div>
    )
}

export default Signup;
