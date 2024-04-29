import "../styles/generalStyle.css";
import { useState, useRef, useEffect } from "react";
import Selected from "../components/Selected";
import Unselected from "../components/Unselected";
import VegetablesList from "../utils/VegetablesList";
import Garden from "../components/Garden";

const Create = () => {
  const [vegUnselected, setVegUnselected] = useState(VegetablesList);
  const [vegSelected, setVegSelected] = useState([]);
  const [gardenActive, setGardenActive] = useState(false);
  const [gardenFirstActive, setGardenFirstActive] = useState(true);

  const myRef = useRef(null);

  const executeScroll = () => {
    myRef.current ? myRef.current.scrollIntoView() : null;
  };

  useEffect(() => {
    if (gardenActive && myRef.current) {
      executeScroll();
    }
  }, [gardenActive, myRef]);

  return (
    <div className="wrapper">
      <div className="main">
        <h2 className="createTitle">
          Pick all the vegetables you want to grow!
        </h2>
        <Unselected
          vegSelected={vegSelected}
          setVegSelected={setVegSelected}
          vegUnselected={vegUnselected}
          setVegUnselected={setVegUnselected}
          gardenActive={gardenActive}
          setGardenActive={setGardenActive}
        />

        {vegSelected.length > 0 && (
          <div className="selectedContainer">
            <Selected
              vegSelected={vegSelected}
              setVegSelected={setVegSelected}
              vegUnselected={vegUnselected}
              setVegUnselected={setVegUnselected}
              gardenActive={gardenActive}
              setGardenActive={setGardenActive}
            />
            {!gardenActive && (
              <button
                className="createGardenBtn"
                onClick={() => {
                  setGardenActive(true);
                  setGardenFirstActive(false);
                  executeScroll();
                }}
              >
                {gardenFirstActive
                  ? `Create my garden!`
                  : `Recreate my garden!`}
              </button>
            )}

            {gardenActive && (
              <Garden
                refProp={myRef}
                vegSelected={vegSelected}
                setVegSelected={setVegSelected}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Create;
