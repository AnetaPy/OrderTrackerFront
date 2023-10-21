import './page.css'
import {LoginIntroduction} from "@/app/components/common/LoginIntroduction";
import {LoginPortals} from "@/app/components/login/LoginPortals/LoginPortals";
import {LoginDivider} from "@/app/components/login/LoginDivider/LoginDivider";
import {LoginForm} from "@/app/components/login/LoginForm/LoginForm";

const Login = () => {
    return (
        <div className="Login">
            <LoginIntroduction/>
            <div className="Login_container">
                <img src="/images/logo.png" alt=""/>
                <h2>Logowanie</h2>
                <LoginPortals/>
                <LoginDivider/>
                <LoginForm/>
            </div>
        </div>
    )
}

export default Login;
