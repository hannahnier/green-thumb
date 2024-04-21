import { useState } from "react";

const Garden = ({ refProp, vegSelected, setVegSelected }) => {
  
  const [gardenPlants, setGardenPlants] = useState([]);

  return (
    <div className="sectionBox">
      <h2>My Garden</h2>
      <div className="gardenBox"></div>
      <p style={{ height: "500px" }}></p>
      <p>
        The vegetables in your garden have been arranged according to which
        plants make good or bad neighbors to each other. This concept is called
        companion planting. Following this gardening technique, two or more
        species are planted together to enhance each other&apos;s growth, repel
        pests, attract beneficial insects, or provide other benefits. 3(heart)
      </p>
      <p ref={refProp}>hierhin bitte</p>
      <a href="#top">
        <button className="toTopBtn">Back to top</button>
      </a>
    </div>
  );
};

export default Garden;
