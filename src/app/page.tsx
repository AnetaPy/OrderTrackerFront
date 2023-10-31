import './page.css'
import {LoginIntroduction} from "@/components/common/LoginIntroduction/LoginIntroduction";
import {LoginPortals} from "@/components/login/LoginPortals/LoginPortals";
import {Divider} from "@/components/common/Divider/Divider";
import {LoginForm} from "@/components/login/LoginForm/LoginForm";

const Login = () => {
    return (
        <div className="Login">
            <LoginIntroduction/>
            <div className="Login_container">
                <img src="/images/logo.png" alt=""/>
                <h2>Logowanie</h2>
                <LoginPortals/>
                <Divider/>
                <LoginForm/>
            </div>
        </div>
    )
}

export default Login;