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
        According to the concept of <strong>Companion Planting</strong>,
        vegetables can make good or bad neighbors to each other. Following this
        gardening technique, certain species are planted together to enhance
        each other&apos;s growth, repel pests, attract beneficial insects, or
        provide other benefits. Move your plants around to figure out which ones
        make a good fit.
      </p>
      <a href="#top">
        <button className="toTopBtn">Back to top</button>
      </a>
    </div>
  );
};

export default Garden;
