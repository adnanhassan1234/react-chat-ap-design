import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="loginLeft mt-5">
                <h3 className="loginLogo">Lamasocial</h3>
                <span className="loginDesc">
                  Connect with friends and the world around you on Lamasocial.
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="loginRight">
                <div className="loginBox">
                  <input placeholder="Email" className="loginInput my-2" />
                  <input placeholder="Password" className="loginInput my-2" />
                  <button className="loginButton my-2">Log In</button>
                  <span className="loginForgot my-2">Forgot Password?</span>
                  <button className="loginRegisterButton my-2">
                    Create a New Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
