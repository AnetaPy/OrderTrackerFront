import React from "react";
import './LoginForm.css';

export const LoginForm = () => {
    return(
        <div className="Login_form">
            <form>
                <label>
                    E-mail
                    <input
                        type="email"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        className="Login_email"
                        placeholder="E-mail"
                    />
                </label>
                <label>
                    Hasło
                    <input
                        type="password"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        className="Login_password"
                        placeholder="Hasło"
                    />
                </label>
                <button
                    // disabled={loading || !email || !password}
                > Zaloguj
                    {/*{loading ? "Please wait.." : "Submit"}*/}
                </button>
            </form>
            <a href="/signup">
                <p>Nie masz konta? <span>Zarejestruj się!</span></p>
            </a>
        </div>
    )
};