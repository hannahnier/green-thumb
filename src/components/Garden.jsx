import { useState } from "react";
import Patch from "./Patch";
import heart from "../assets/heart.png";

const Garden = ({ refProp, vegSelected }) => {
  const [vegSelectedNew, setVegSelectedNew] = useState([...vegSelected]);

  return (
    <div className="main garden" ref={refProp}>
      <h2 className="gardenTitle">My Garden</h2>
      <div className="gardenBox">
        {vegSelectedNew.map((x) => (
          <Patch
            key={x.id}
            veg={x}
            vegSelectedNew={vegSelectedNew}
            setVegSelectedNew={setVegSelectedNew}
          />
        ))}
      </div>
      <p className="gardenP">
        <img
          src={heart}
          alt="heart symbol"
          style={{ width: "1.5em", marginRight: "1em", marginBottom: "1em" }}
        />
        Some vegetables can make good or bad companions to others. You can plant
        friendly species next to each other and they will benefit from the good
        neighborhood. <br />
        <br />
        Simply look at the small images of their friends and move your plants
        around (or bring in new friends) to make them happy.
      </p>
      <a href="#top">
        <button className="toTopBtn">Back to top</button>
      </a>
    </div>
  );
};

export default Garden;
