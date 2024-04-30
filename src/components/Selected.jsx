import "../styles/generalStyle.css";
import wood2 from "../assets/wood2.jpeg";

const Selected = ({
  vegUnselected,
  setVegUnselected,
  vegSelected,
  setVegSelected,
  gardenActive,
  setGardenActive,
}) => {
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
          >
            <p className="delete" onClick={() => unselectVeg(veg)}>
              x
            </p>
            <img
              src={veg.src}
              alt="vegetable"
              style={{ width: "100px", height: "100px" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Selected;
