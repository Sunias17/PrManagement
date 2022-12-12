const Login = () => {
    return(
        <div className="login">
            <img src="./logo.png" alt="logo" className="logo"/>
            <h3> LOG IN</h3>
            <div className="inputgroup">
                <div>Username</div>
                <div>
                    <input type="text" placeholder="Username" className="input"/>
                </div>
                <div>Password</div>
                <div>
                    <input type="password" placeholder="Password" className="input"/>
                </div>
            </div>
            <button className="button">LOGIN</button>
            <div>No account yet? <span><u>Click Here</u></span></div>
            <div>or</div>
            <div>Signup as <span>ADMIN</span></div>
        </div>
    )
}

export default Login