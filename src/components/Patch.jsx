import patch1Img from "../assets/plants1.jpeg";
import patch2Img from "../assets/plants2.jpeg";
import patch3Img from "../assets/plants3.jpeg";
import Infobox from "./Infobox";
import InfoboxNeighbors from "./InfoBoxNeighbors";
import { useState } from "react";
import heart from "../assets/heart.png";
import VegetablesList from "../utils/VegetablesList";

const Patch = ({ veg, vegSelectedNew, setVegSelectedNew }) => {
  const [boxActive, setBoxActive] = useState(false);
  const [infoActive, setInfoActive] = useState(false);

  const patchImages = [patch1Img, patch2Img, patch3Img];
  const src = patchImages[vegSelectedNew.indexOf(veg) % 3];

  const rightNeighbor = vegSelectedNew[vegSelectedNew.indexOf(veg) + 1];

  const moveLeft = () => {
    let newOrder = [...vegSelectedNew];
    let firstPos = newOrder.indexOf(veg);
    let secondPos = newOrder.indexOf(veg) - 1;
    newOrder[firstPos] = newOrder[secondPos];
    newOrder[secondPos] = veg;
    setVegSelectedNew(newOrder);
  };

  const moveRight = () => {
    let newOrder = [...vegSelectedNew];
    let firstPos = newOrder.indexOf(veg);
    let secondPos = newOrder.indexOf(veg) + 1;
    newOrder[firstPos] = newOrder[secondPos];
    newOrder[secondPos] = veg;
    setVegSelectedNew(newOrder);
  };

  return (
    <div
      className="patch"
      onMouseEnter={() => setInfoActive(true)}
      onMouseLeave={() => {
        setInfoActive(false);
      }}
    >
      <img className="patchImg" src={src} alt="patch" />
      <img className="veg" src={veg.src} alt={veg.name} />
      <div className="goodNeighbors">
        {veg.goodNeighbors &&
          VegetablesList.map((obj) => {
            if (veg.goodNeighbors.includes(obj.name)) {
              return <img key={obj.id} title={obj.name} src={obj.src} />;
            }
          })}
      </div>

      {vegSelectedNew.indexOf(veg) !== 0 && (
        <button
          onClick={moveLeft}
          className="arrow arrowToLeft"
          onMouseEnter={() => {
            setBoxActive(true);
            setInfoActive(true);
          }}
          onMouseLeave={() => {
            setBoxActive(false);
          }}
        >
          &lt;{" "}
        </button>
      )}
      {vegSelectedNew.indexOf(veg) !== vegSelectedNew.length - 1 && (
        <button
          onClick={moveRight}
          className="arrow arrowToRight"
          onMouseEnter={() => {
            setBoxActive(true);
            setInfoActive(true);
          }}
          onMouseLeave={() => {
            setBoxActive(false);
          }}
        >
          &gt;
        </button>
      )}
      {veg &&
        rightNeighbor &&
        veg.goodNeighbors.includes(rightNeighbor.name) && (
          <img className="heart" src={heart} />
        )}

      {!infoActive ? null : boxActive ? (
        <InfoboxNeighbors vegActive={veg} boxActive={boxActive} />
      ) : (
        <Infobox vegActive={veg} />
      )}
    </div>
  );
};

export default Patch;
