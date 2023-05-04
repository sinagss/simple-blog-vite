import { useRef, useState } from "react";
import "./Login.css";

const Login = () => {
  const usernameInput = useRef();
  const passwordInput = useRef();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    isLogedIn: false,
  });

  const onLoginHandler = (event) => {
    event.preventDefault();
    setCredentials({
      username: usernameInput.current.value,
      password: passwordInput.current.value,
      isLogedIn: true,
    });

  };

  const logedIn = (
    <div>
      <section className="login" id="login">
        <div className="head">
          <h1 className="company">
            Welcome Back <span>{credentials.username.toUpperCase()}</span>
          </h1>
        </div>
      </section>
    </div>
  );

  const login = (
    <div className="login-container">
      <section className="login" id="login">
        <div className="head">
          <h1 className="company">
            <span>L</span>ogin
          </h1>
        </div>
        <p className="msg">Welcome Back</p>
        <div className="form">
          <form onSubmit={onLoginHandler}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="text"
              ref={usernameInput}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••••••••"
              className="password"
              ref={passwordInput}
            />
            <div
              style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}
            >
              <button className="btn-login" id="do-login">
                Login
              </button>
              <a href="#" className="forgot">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );

  return <>{credentials.isLogedIn ? logedIn : login}</>;
};

export default Login;
