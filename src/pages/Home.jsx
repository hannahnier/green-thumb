import "../styles/generalStyle.css";
import imgGardening from "../assets/gardening.jpg";

const Home = () => {
  return (
    <div className="main">
      Home
      <div className="titleImg">
        <img src={imgGardening} alt="" />
      </div>
    </div>
  );
};

export default Home;
