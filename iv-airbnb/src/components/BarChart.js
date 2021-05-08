import React from "react";
import * as d3 from "d3";

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
  } = props;

  const color = (d) => d.neighbourhood === selectedNeighbourhood ? "#e60969" : "#57068c";
  
  const ticksx = xScale.domain();
  const ticksy = yScale.ticks(8);

  if (selectedNeighbourhood === " ") {
    return (
      <g transform={`translate(${x}, ${y})`}>
        <text style={{ textAnchor: "start", fontSize: "15px" }} transform={`translate(${width / 3}, -120)`}>
          {"Average Prices of Listings per neighbourhood"}
        </text>
        <line
          x1={100}
          y1={(height / 2) - 70}
          x2={width - 80}
          y2={(height / 2) - 70}
          stroke={`black`}
        />
        {ticksx.map((tickValue) => {
          return (
            <g key={tickValue} transform={`translate(${xScale(tickValue)}, ${height / 2})`}>
            <text style={{textAnchor: 'start', fontSize:'10px' }} y={(height / 2) - 70} transform={`rotate(75, 0, ${(height / 2) - 70})`}>
              {tickValue}
            </text>
            <line y2={5} x1={60}  stroke={"black"} />
            </g>
            );
        })
        }
        <line y1={height/2 -70} y2={height / 2 -250} x1={100} x2={100} stroke={`black`} />
        {ticksy.map((tickValue) => {
          return (
            <g key={tickValue} transform={`translate(90, ${yScale(tickValue)-16})`}>
              <line x2={10} stroke={"black"} />
              <text style={{ textAnchor: "end", fontSize: "18px" }}>
                {tickValue}
              </text>
            </g>
          );
        })}
        {data.map((d) => {
          //   console.log(d.neighbourhood);
          //   console.log(d.price);
          return (
            <rect
              key={d.neighbourhood + "Bar"}
              x={xScale(d.neighbourhood)}
              y={yScale(d.price)}
              width={xScale.bandwidth() -3 } //error
              height={height / 2 -70 -yScale(d.price)}
              fill={"#57068c"}
              stroke={"black"}
              onMouseOver={() => mouseHoveringOn(d)}
              onMouseOut={mouseHoveringOff}
            />
          );
        })}
      </g>
    );
  } else {
    return (
      <g transform={`translate(${x}, ${y})`}>
      <text style={{ textAnchor: "start", fontSize: "15px" }} transform={`translate(${width / 3}, -120)`}>
        {"Average Prices of Listings per neighbourhood"}
      </text>
      <line
        x1={100}
        y1={(height / 2) - 70}
        x2={width - 80}
        y2={(height / 2) - 70}
        stroke={`black`}
      />
      {ticksx.map((tickValue) => {
        return (
          <g key={tickValue} transform={`translate(${xScale(tickValue)}, ${height / 2})`}>
          <text style={{textAnchor: 'start', fontSize:'10px' }} y={(height / 2) - 70} transform={`rotate(75, 0, ${(height / 2) - 70})`}>
            {tickValue}
          </text>
          <line y2={5} x1={60}  stroke={"black"} />
          </g>
          );
      })
      }
      <line y1={height/2 -70} y2={height / 2 -250} x1={100} x2={100} stroke={`black`} />
      {ticksy.map((tickValue) => {
        return (
          <g key={tickValue} transform={`translate(90, ${yScale(tickValue)-16})`}>
            <line x2={10} stroke={"black"} />
            <text style={{ textAnchor: "end", fontSize: "18px" }}>
              {tickValue}
            </text>
          </g>
        );
      })}
        {data.map((d) => {
          //console.log(key);
          return (
            <rect
              key={d.neighbourhood + "Bar"}
              x={xScale(d.neighbourhood)}
              y={yScale(d.price)}
              width={xScale.bandwidth()-3} //error
              height={height / 2 -70 - yScale(d.price)}
              fill={color(d)}
              stroke={"black"}
              onMouseOver={() => mouseHoveringOn(d)}
              onMouseOut={mouseHoveringOff}
            />
          );

        })}
      </g>
    );
  }
}

export default BarChart;
