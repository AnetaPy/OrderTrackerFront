import './page.css'

const Login = () => {
    return (
        <div className="login">
            <div className="login_introduction">
                <img src="/images/login_img.jpg" alt="People working at computers with charts."/>
                <h1>Witaj w OrderTracker</h1>
                <p>Wszystkie zamówienia, materiały i progress w jednym miejscu</p>
            </div>

            <div className="login_container">
                <img src="/images/logo.png" alt=""/>
                <h2>Logowanie</h2>
                <div className="login_portals">
                    <button>
                        <div className="login_button">
                            <img src="/images/icon_google.png" alt=""/>
                            <p>Zaloguj się z Google</p>
                        </div>
                    </button>
                    <button>
                        <div className="login_button">
                            <img src="/images/icon_github.png" alt=""/>
                            <p>Zaloguj się z GitHub</p>
                        </div>
                    </button>
                </div>
                <div className="login_divider">
                    <div className="login_line"></div>
                    <p>lub</p>
                    <div className="login_line"></div>
                </div>
                <div className="login_form">
                    <form>
                        <label>
                            E-mail
                            <input
                                type="email"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                className="login_email"
                                placeholder="E-mail"
                            />
                        </label>
                        <label>
                            Hasło
                            <input
                                type="password"
                                // value={password}
                                // onChange={(e) => setPassword(e.target.value)}
                                className="login_password"
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

            </div>
        </div>
    )
}

export default Login;
