import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <section className="login" id="login">
        <div className="head">
          <h1 className="company">
            <span>L</span>ogin
          </h1>
        </div>
        <p className="msg">Welcome Back</p>
        <div className="form">
          <form>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="text"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••••••••"
              className="password"
            />
            <div
              style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}
            >
              <a href="#" className="btn-login" id="do-login">
                Login
              </a>
              <a href="#" className="forgot">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
