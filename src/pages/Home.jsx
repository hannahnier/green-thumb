import "../styles/generalStyle.css";
import logo from "../assets/logo2.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="main home">
        <div className="textContainer">
          <h1>green thumb</h1>
          <p className="homeP">
            Can&apos;t wait to dive into the Gardening Season at last? Start
            today by choosing your vegetables and planning the patch. This app
            will make sure that when the snow finally melts and the garden
            starts calling, you are all set!
          </p>
        </div>
        <div className="titleImg">
          <img src={logo} alt="" />
        </div>
        <NavLink className="link" to={"/create"}>
          Create your own garden!
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
