import './page.css'
import {LoginIntroduction} from "@/components/common/LoginIntroduction/LoginIntroduction";
import {LoginPortals} from "@/components/login/LoginPortals/LoginPortals";
import {Divider} from "@/components/common/Divider/Divider";
import {LoginForm} from "@/components/login/LoginForm/LoginForm";
import {redirect} from "next/navigation";

const Login = () => {
    return (
        <div className="Login">
            {redirect('/home')}
            {/*<LoginIntroduction/>*/}
            {/*<div className="Login_container">*/}
            {/*    <img src="/images/logo.png" alt=""/>*/}
            {/*    <h2>Logowanie</h2>*/}
            {/*    <LoginPortals/>*/}
            {/*    <Divider/>*/}
            {/*    <LoginForm/>*/}
            {/*</div>*/}
        </div>
    )
}

export default Login;