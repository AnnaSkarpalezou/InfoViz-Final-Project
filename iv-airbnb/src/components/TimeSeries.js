import React from "react";
import * as d3 from "d3";

function TimeSeries(props) {
  const {
    data,
    x,
    y,
    width,
    height,
    xScale,
    yScale,
    neighbourhoodNames,
    SelectedNeighbourhood,
    setSelectedNeighbourhood,
    mouseHoveringOn,
    mouseHoveringOff} = props;

  const ticksX = xScale.domain();
  const ticksY = yScale.ticks(5);

  const p1 = d3.area()
    .x(d => xScale(d.date))
    .y0(height/2 +72)
    .y1(d => yScale(d.total))
    .curve(d3.curveBasis)
    (data);
  
  console.log(data[0].date)
  

    return <g transform={`translate(${x}, ${y})`} >
      <path d={p1} fill={'lightgreen'} stroke={'black'} />
      <text transform={`translate(${0}, ${0})rotate(0)`}>
                    {"Total"}
            </text>
  </g>
  }

export default TimeSeries;
