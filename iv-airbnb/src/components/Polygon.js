import React from "react";

function Polygon(props) {
  const { points } = props;
  return (
    <g className="polygon">
      <polygon points={points.join(" ")} />
    </g>
  );
}

export default Polygon;
