import { useEffect, useState } from "react";

const Garden = ({ refProp, vegSelected }) => {
  const [vegSelectedNew, setVegSelectedNew] = useState([...vegSelected]);
  const [ordered, setOrdered] = useState([]);
  const [sorted, setSorted] = useState([]);

  const findCurrentNeighbors = (element, array, category) => {
    return array
      .filter(
        (otherElement) =>
          element !== otherElement && category.includes(otherElement.name)
      )
      .map((otherVeg) => otherVeg.name);
  };

  useEffect(() => {
    const myNewList = vegSelected.map((veg) => {
      const currentGoodNeighbors = findCurrentNeighbors(
        veg,
        vegSelected,
        veg.goodNeighbors
      );

      const currentBadNeighbors = findCurrentNeighbors(
        veg,
        vegSelected,
        veg.badNeighbors
      );

      const currentGoodNeighborsCount = currentGoodNeighbors.length;
      const currentBadNeighborsCount = currentBadNeighbors.length;
      return {
        ...veg,
        currentGoodNeighbors,
        currentGoodNeighborsCount,
        currentBadNeighbors,
        currentBadNeighborsCount,
      };
    });

    setVegSelectedNew(myNewList);
  }, [vegSelected]);

  useEffect(() => {
    const sortedList = [...vegSelectedNew].sort((a, b) => {
      // return a.currentGoodNeighborsCount === b.currentGoodNeighborsCount
      //   ? b.currentBadNeighborsCount - a.currentBadNeighborsCount
      //   : a.currentGoodNeighborsCount - b.currentGoodNeighborsCount;
      return b.currentGoodNeighborsCount === a.currentGoodNeighborsCount
        ? a.currentBadNeighborsCount - b.currentBadNeighborsCount
        : b.currentGoodNeighborsCount - a.currentGoodNeighborsCount;
    });
    setOrdered(sortedList);
  }, [vegSelectedNew]);

  // useEffect(() => {
  //   const pairs=[]
  //   for (let i=0;i<ordered.length;i++){
  //     ordered[i].currentGoodNeighbors.includes(ordered[i+1].name)?
  //     {pairs.push(ordered[i])
  //     pairs.push(ordered(i+1))}:pairs.push

  //   }
  // }, [ordered]);

  useEffect(() => {
    const newList = [];
    const remaining = [...ordered];

    const findNextNeighbor = (veg) => {
      if (veg.currentGoodNeighbors.length > 0) {
        for (let neighbor of veg.currentGoodNeighbors) {
          const nextNeighbor = remaining.find((v) => v.name === neighbor);
          if (nextNeighbor) {
            return nextNeighbor;
          }
        }
      }
      for (let neighbor of remaining) {
        if (!veg.currentBadNeighbors.includes(neighbor.name)) {
          return neighbor;
        }
      }
      return null;
    };

    while (remaining.length > 0) {
      let currentVeg = remaining[0];
      const nextNeighbor = findNextNeighbor(currentVeg);

      if (nextNeighbor !== null) {
        newList.push(nextNeighbor);
        remaining.splice(
          remaining.findIndex((veg) => veg.name === nextNeighbor.name),
          1
        );
      } else {
        newList.push(currentVeg);
        remaining.shift();
      }
    }

    setSorted(newList);
  }, [ordered]);

  return (
    <div className="sectionBox">
      <h2 ref={refProp}>My Garden</h2>
      <div className="gardenBox"></div>
      <p style={{ height: "500px" }}></p>
      {sorted &&
        sorted.length &&
        sorted[0].currentGoodNeighbors &&
        `${sorted[0].name} has got ${sorted[0].currentGoodNeighborsCount} good neighbors: ${sorted[0].currentGoodNeighbors}. ${sorted[1].name} has got ${sorted[1].currentGoodNeighborsCount} good neighbors: ${sorted[1].currentGoodNeighbors}. ${sorted[2].name} has got ${sorted[2].currentGoodNeighborsCount} good neighbors: ${sorted[2].currentGoodNeighbors}`}
      <p>{sorted[0].name}</p>
      <p>h</p>
      <p>
        The vegetables in your garden have been arranged according to which
        plants make good or bad neighbors to each other. This concept is called
        companion planting. Following this gardening technique, two or more
        species are planted together to enhance each other&apos;s growth, repel
        pests, attract beneficial insects, or provide other benefits. 3(heart)
      </p>
      <a href="#top">
        <button className="toTopBtn">Back to top</button>
      </a>
    </div>
  );
};

export default Garden;

// const sortByNeighbors = () => {
//   setVegSelectedNew(
//     JSON.parse(JSON.stringify(vegSelected)).sort((a, b) => {
//       return a.goodNeighbors.includes(b.name) ? 1 : -1;
//     })
//   );
// };
