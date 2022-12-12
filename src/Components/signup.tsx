const Signup = () => {
    return(
        <div className="signup">
            <h3>Signup</h3>
            <div className="inputgroup">
                <div>Name</div>
                <div>
                    <input type="text" placeholder="Last, First M.I" className="input"/>
                </div>
                <div>Contact Number</div>
                <div>
                    <input type="text" placeholder="09*********" className="input"/>
                </div>
                <div>Barangay Code</div>
                <div>
                    <input type="text" placeholder="*******" className="input"/>
                </div>
                <div>Username</div>
                <div>
                    <input type="text" placeholder="Username" className="input"/>
                </div>
                <div>Password</div>
                <div>
                    <input type="password" placeholder="Password" className="input"/>
                </div>
                <div><input type="password" placeholder="Re-enter Password" className="input"/></div>
            </div>
            <button className="button">LOGIN</button>
            <div>Already have yet? <span><u>Click Here</u></span></div>
        </div>
    )
}

export default Signup