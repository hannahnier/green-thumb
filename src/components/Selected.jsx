import "../styles/generalStyle.css";
import wood2 from "../assets/wood2.jpeg";
// import { useState } from "react";
// import Infobox from "./Infobox";

const Selected = ({
  vegUnselected,
  setVegUnselected,
  vegSelected,
  setVegSelected,
  gardenActive,
  setGardenActive,
}) => {
  // const [infoActive, setInfoActive] = useState(false);

  const unselectVeg = (veg) => {
    setGardenActive(false);
    setVegSelected(vegSelected.filter((x) => x.id !== veg.id));
    setVegUnselected([
      ...vegUnselected,
      {
        ...veg,
      },
    ]);
  };

  return (
    <div className="selected">
      <h2>My vegetables</h2>
      <div className="vegContainer">
        {vegSelected.map((veg) => (
          <button
            key={veg.id}
            title={veg.name}
            className="vegCard btnUnselect"
            style={{
              background: `url(${wood2})`,
            }}
            // onMouseEnter={() => {
            //   setInfoActive(veg);
            // }}
            // onMouseLeave={() => setInfoActive(false)}
          >
            <p className="delete" onClick={() => unselectVeg(veg)}>
              x
            </p>
            <img
              src={veg.src}
              alt="vegetable"
              style={{ width: "100px", height: "100px" }}
            />

            {/* {infoActive && infoActive.id === veg.id && (
              <Infobox
                vegActive={infoActive}
                vegUnselected={vegUnselected}
                veg={veg}
              />
            )} */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Selected;
