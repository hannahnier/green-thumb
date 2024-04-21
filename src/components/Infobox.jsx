const Infobox = ({ vegActive, veg }) => {
  return (
    <div className="infoCard">
      <h2>{vegActive.name}</h2>
      {vegActive.prebreed && (
        <p>
          <strong>Pre-cultivation: </strong> {vegActive.prebreed}
        </p>
      )}

      {vegActive.direct && (
        <p>
          <strong>Direct sowing: </strong>
          {vegActive.direct}
        </p>
      )}

      <p>
        <strong>Sowing depth: </strong> {vegActive.depth}
      </p>
      <p>
        <strong>Germination temperature for cultivation: </strong>{" "}
        {vegActive.temp}
      </p>
      <p>
        <strong>Spacing: </strong> {vegActive.spacing}
      </p>
    </div>
  );
};

export default Infobox;
