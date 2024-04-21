import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      className="main errorPage"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>404</h2>
      <h3>This page does not exist.</h3>
      <button onClick={() => navigate("/")}>Go back to Home</button>
    </div>
  );
};

export default NotFound;
