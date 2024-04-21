import { useState } from "react";
import wood2 from "../assets/wood2.jpeg";
import Infobox from "./Infobox";

const Unselected = ({
  vegUnselected,
  setVegUnselected,
  vegSelected,
  setVegSelected,
  gardenActive,
  setGardenActive,
}) => {
  const [infoActive, setInfoActive] = useState(false);

  const selectVeg = (veg) => {
    setGardenActive(false);
    setVegUnselected(vegUnselected.filter((x) => x.id !== veg.id));
    setVegSelected([...vegSelected, { ...veg }]);
  };

  return (
    <div className="vegContainer">
      {vegUnselected.map((veg) => (
        <button
          key={veg.id}
          className="vegCard btnSelect"
          style={{
            background: `url(${wood2})`,
          }}
          onClick={() => selectVeg(veg)}
          onMouseEnter={() => {
            setInfoActive(veg);
          }}
          onMouseLeave={() => setInfoActive(false)}
        >
          <img
            src={veg.src}
            alt="vegetable"
            style={{ width: "100px", height: "100px" }}
          />

          {infoActive && infoActive.id === veg.id && (
            <Infobox
              vegActive={infoActive}
              vegUnselected={vegUnselected}
              veg={veg}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default Unselected;
