const InfoboxNeighbors = ({ vegActive, boxActive }) => {
  return (
    <div className="infoCard neighbors">
      <h2>{vegActive.name}</h2>
      {vegActive.goodNeighbors && (
        <p>
          <strong>Good neighbors: </strong> {vegActive.goodNeighbors.join(", ")}
        </p>
      )}

      {vegActive.badNeighbors && (
        <p>
          <strong>Bad neighbors: </strong>
          {vegActive.badNeighbors.join(", ")}
        </p>
      )}
    </div>
  );
};

export default InfoboxNeighbors;
