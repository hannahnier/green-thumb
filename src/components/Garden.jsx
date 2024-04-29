import { useState } from "react";
import Patch from "./Patch";

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
      <p style={{ height: "500px" }}></p>

      {/* <p>
        The vegetables in your garden have been arranged according to which
        plants make good or bad neighbors to each other. This concept is called
        companion planting. Following this gardening technique, two or more
        species are planted together to enhance each other&apos;s growth, repel
        pests, attract beneficial insects, or provide other benefits. 3(heart)
      </p> */}
      <a href="#top">
        <button className="toTopBtn">Back to top</button>
      </a>
    </div>
  );
};

export default Garden;
