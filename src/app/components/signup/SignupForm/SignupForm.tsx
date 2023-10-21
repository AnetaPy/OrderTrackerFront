import React from "react";
import './SignupForm.css';

export const SignupForm = () => {
    return (
        <div className="Signup_container">
            <img src="/images/logo.png" alt=""/>
            <h2>Rejestracja</h2>
            <div className="Signup_form">
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
                    <label>
                        Powtórz hasło
                        <input
                            type="password"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            className="Login_password"
                            placeholder="Powtórz hasło"
                        />
                    </label>
                    <button
                        // disabled={loading || !email || !password}
                    > Zarejestruj się
                        {/*{loading ? "Please wait.." : "Submit"}*/}
                    </button>
                </form>
            </div>
        </div>
    )
};