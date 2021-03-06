import React from "react";

function BarChart(props) {
  const {
    x,
    y,
    width,
    height,
    data,
    selectedNeighbourhood,
    mouseHoveringOn,
    mouseHoveringOff,
    xScale,
    yScale,
    setTooltipX,
    setTooltipY,
  } = props;

  const color = (d) =>
    d.neighbourhood === selectedNeighbourhood ? "#e60969" : "#57068c";

  const ticksx = xScale.domain();
  const ticksy = yScale.ticks(8);

  if (selectedNeighbourhood === " ") {
    return (
      <g transform={`translate(${x}, ${y - 15})`}>
        <text
          style={{
            textAnchor: "start",
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "Courier New, Courier, monospace",
            color: "#57068c",
          }}
          transform={`translate(${width / 3 - 110}, -150)`}
        >
          {"Average Prices of Listings per neighbourhood"}
        </text>
        <line
          x1={100}
          y1={height / 2 - 70}
          x2={width - 80}
          y2={height / 2 - 70}
          stroke={`black`}
        />
        <line
          y1={height / 2 - 70}
          y2={height / 2 - 250}
          x1={100}
          x2={100}
          stroke={`black`}
        />
        <g transform={`translate(${0}, ${-16})`}>
          {ticksx.map((tickValue) => {
            return (
              <g
                key={tickValue}
                transform={`translate(${xScale(tickValue) - 10}, ${
                  height / 2 + 5
                })`}
              >
                <text
                  style={{
                    textAnchor: "start",
                    fontSize: "9px",
                    fontWeight: "bold",
                    fontFamily: "Courier New, Courier, monospace",
                    color: "#57068c",
                  }}
                  x={-80}
                  y={height / 2 - 170}
                  transform={`rotate(50, 0, ${height / 2 - 83})`}
                >
                  {tickValue
                    .split("/")[1]
                    .slice(0, tickValue.split("/")[1].length - 8)}
                </text>
              </g>
            );
          })}
          {ticksy.map((tickValue) => {
            return (
              <g
                key={tickValue}
                transform={`translate(90, ${yScale(tickValue) - 100})`}
              >
                <line x2={10} stroke={"black"} />
                <text
                  style={{
                    textAnchor: "start",
                    fontSize: "12px",
                    fontWeight: "bold",
                    fontFamily: "Courier New, Courier, monospace",
                    color: "#57068c",
                  }}
                  transform={"translate(-30,0)"}
                >
                  {tickValue}
                </text>
              </g>
            );
          })}
        </g>
        <g transform={`translate(${0}, ${-115})`}>
          {data.map((d) => {
            //   console.log(d.neighbourhood);
            //   console.log(d.price);
            return (
              <rect
                key={d.neighbourhood + "Bar"}
                x={xScale(d.neighbourhood)}
                y={yScale(Number(d.price))}
                width={xScale.bandwidth() - 5} //error
                height={height / 2 + 45 - yScale(d.price)}
                fill={"#57068c"}
                stroke={"black"}
                onMouseOver={() => mouseHoveringOn(d)}
                onMouseOut={mouseHoveringOff}
              />
            );
          })}
        </g>
      </g>
    );
  } else {
    return (
      <g transform={`translate(${x}, ${y - 15})`}>
        <text
          style={{
            textAnchor: "start",
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "Courier New, Courier, monospace",
            color: "#57068c",
          }}
          transform={`translate(${width / 3 - 110}, -150)`}
        >
          {"Average Prices of Listings per neighbourhood"}
        </text>
        <line
          x1={100}
          y1={height / 2 - 70}
          x2={width - 80}
          y2={height / 2 - 70}
          stroke={`black`}
        />
        <line
          y1={height / 2 - 70}
          y2={height / 2 - 250}
          x1={100}
          x2={100}
          stroke={`black`}
        />
        <g transform={`translate(${0}, ${-16})`}>
          {ticksx.map((tickValue) => {
            return (
              <g
                key={tickValue}
                transform={`translate(${xScale(tickValue) - 10}, ${
                  height / 2 + 5
                })`}
              >
                <text
                  style={{
                    textAnchor: "start",
                    fontSize: "9px",
                    fontWeight: "bold",
                    fontFamily: "Courier New, Courier, monospace",
                    color: "#57068c",
                  }}
                  x={-80}
                  y={height / 2 - 170}
                  transform={`rotate(50, 0, ${height / 2 - 83})`}
                >
                  {tickValue
                    .split("/")[1]
                    .slice(0, tickValue.split("/")[1].length - 8)}
                </text>
              </g>
            );
          })}
          {ticksy.map((tickValue) => {
            return (
              <g
                key={tickValue}
                transform={`translate(90, ${yScale(tickValue) - 100})`}
              >
                <line x2={10} stroke={"black"} />
                <text
                  style={{
                    textAnchor: "start",
                    fontSize: "12px",
                    fontWeight: "bold",
                    fontFamily: "Courier New, Courier, monospace",
                    color: "#57068c",
                  }}
                  transform={"translate(-30,0)"}
                >
                  {tickValue}
                </text>
              </g>
            );
          })}
        </g>
        <g transform={`translate(${0}, ${-115})`}>
          {data.map((d) => {
            //console.log(key);
            return (
              <rect
                key={d.neighbourhood + "Bar"}
                x={xScale(d.neighbourhood)}
                y={yScale(d.price)}
                width={xScale.bandwidth() - 5} //error
                height={height / 2 + 45 - yScale(d.price)}
                fill={color(d)}
                stroke={"black"}
                onMouseOver={() => mouseHoveringOn(d)}
                onMouseOut={mouseHoveringOff}
              />
            );
          })}
        </g>
      </g>
    );
  }
}

export default BarChart;
