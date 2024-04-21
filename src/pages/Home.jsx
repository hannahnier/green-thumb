import "../styles/generalStyle.css";
import logo from "../assets/logo2.png";

const Home = () => {
  return (
    <div className="main">
      <h2>Create your own garden!</h2>
      <p style={{ width: "50vw" }}>
        Can&apos;t wait to dive into the Gardening Season at last? Start today
        by choosing your vegetables and planning the patch. This app will make
        sure that when the snow is finally melting and the garden is calling,
        you are ready to go!
      </p>
      <div className="titleImg">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Home;
