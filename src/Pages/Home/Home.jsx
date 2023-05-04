import Login from "../Login/Login";
import "./home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div>
        <h1>
          A <span>S</span>imple <span>D</span>emonstration
        </h1>
        <h3>
          Click on the <span id="styled-span">Posts Link</span> in the
          navigation bar
        </h3>
      </div>
      <div className="login-wrapper">
        <Login />
      </div>
    </div>
  );
};

export default Home;
