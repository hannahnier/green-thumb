const Garden = ({ refProp }) => {
  return (
    <div className="sectionBox">
      <h2>My Garden</h2>
      <p style={{ height: "500px" }}></p>
      <p ref={refProp}>hierhin bitte</p>
      <a href="#top">
        <button className="toTopBtn">Back to top</button>
      </a>
    </div>
  );
};

export default Garden;
