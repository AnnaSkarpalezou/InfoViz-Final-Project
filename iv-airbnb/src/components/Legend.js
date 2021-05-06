import React from "react";

function Legend(props) {
  const { x, y } = props;
  const width = x;
  const height = y;
  return (
    <g id="Legend">
      <rect x={x} y={y} width={width} height={height} fill={"#57068c"} />
      <text x={x + width + 10} y={2 * y - height / 2 + 3} fill={"#57068c"}>
        {">"}10,000
      </text>
      <rect x={x} y={2 * y} width={width} height={height} fill={"#702b9d"} />
      <text x={x + width + 10} y={3 * y - height / 2 + 3} fill={"#57068c"}>
        10,000 - 3,000
      </text>
      <rect x={x} y={3 * y} width={width} height={height} fill={"#8950ae"} />
      <text x={x + width + 10} y={4 * y - height / 2 + 3} fill={"#57068c"}>
        3,000 - 2,000
      </text>
      <rect x={x} y={4 * y} width={width} height={height} fill={"#a376c0"} />
      <text x={x + width + 10} y={5 * y - height / 2 + 3} fill={"#57068c"}>
        2,000 - 1,000
      </text>
      <rect x={x} y={5 * y} width={width} height={height} fill={"#bc9bd1"} />
      <text x={x + width + 10} y={6 * y - height / 2 + 3} fill={"#57068c"}>
        1,000 - 600
      </text>
      <rect x={x} y={6 * y} width={width} height={height} fill={"#d5c1e2"} />
      <text x={x + width + 10} y={7 * y - height / 2 + 3} fill={"#57068c"}>
        600 - 200
      </text>
      <rect x={x} y={7 * y} width={width} height={height} fill={"#eee6f3"} />
      <text x={x + width + 10} y={8 * y - height / 2 + 3} fill={"#57068c"}>
        {"<"}200
      </text>
    </g>
  );
}

export default Legend;
