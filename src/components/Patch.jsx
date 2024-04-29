import patch1Img from "../assets/plants1.jpeg";
import patch2Img from "../assets/plants2.jpeg";
import patch3Img from "../assets/plants3.jpeg";
import Infobox from "./Infobox";

const Patch = ({ veg, vegSelectedNew, setVegSelectedNew }) => {
  const patchImages = [patch1Img, patch2Img, patch3Img];
  const src = patchImages[vegSelectedNew.indexOf(veg) % 3];

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
    <div className="patch">
      <img className="patchImg" src={src} alt="veg.name" />
      <img className="veg" src={veg.src} alt="" />
      {vegSelectedNew.indexOf(veg) !== 0 && (
        <button onClick={moveLeft} className="arrow arrowToLeft">
          &lt;{" "}
        </button>
      )}
      {vegSelectedNew.indexOf(veg) !== vegSelectedNew.length - 1 && (
        <button onClick={moveRight} className="arrow arrowToRight">
          &gt;
        </button>
      )}
      <Infobox vegActive={veg} />
    </div>
  );
};

export default Patch;
