import React from "react";

function Legend(props) {
  const { x, y } = props;
  const width = x;
  const height = 30;
  return (
    <g id="Legend" transform={`translate(0,35)`}>
      <rect x={x} y={y} width={width} height={height} fill={"#57068c"} />
      <text x={x + width + 10} y={y + height / 2 + 6} fill={"#57068c"}>
        {">"}10K
      </text>
      <rect
        x={x}
        y={y + height}
        width={width}
        height={height}
        fill={"#702b9d"}
      />
      <text x={x + width + 10} y={y + 1.7 * height} fill={"#57068c"}>
        10K - 3K
      </text>
      <rect
        x={x}
        y={y + height * 2}
        width={width}
        height={height}
        fill={"#8950ae"}
      />
      <text x={x + width + 10} y={3 * y} fill={"#57068c"}>
        3K - 2K
      </text>
      <rect
        x={x}
        y={y + height * 3}
        width={width}
        height={height}
        fill={"#a376c0"}
      />
      <text x={x + width + 10} y={4 * y - height / 3} fill={"#57068c"}>
        2K - 1K
      </text>
      <rect
        x={x}
        y={y + height * 4}
        width={width}
        height={height}
        fill={"#bc9bd1"}
      />
      <text x={x + width + 10} y={5 * y - height / 1.5} fill={"#57068c"}>
        1K - 600
      </text>
      <rect
        x={x}
        y={y + height * 5}
        width={width}
        height={height}
        fill={"#d5c1e2"}
      />
      <text x={x + width + 10} y={5 * y + height / 3} fill={"#57068c"}>
        600 - 200
      </text>
      <rect
        x={x}
        y={y + height * 6}
        width={width}
        height={height}
        fill={"#eee6f3"}
      />
      <text x={x + width + 10} y={6 * y} fill={"#57068c"}>
        {"<"}200
      </text>
    </g>
  );
}

export default Legend;
