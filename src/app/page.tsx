import './page.css'
import {LoginIntroduction} from "@/components/common/LoginIntroduction";
import {LoginPortals} from "@/components/login/LoginPortals/LoginPortals";
import {LoginDivider} from "@/components/login/LoginDivider/LoginDivider";
import {LoginForm} from "@/components/login/LoginForm/LoginForm";

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
