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
  const ticksUp = yScale.ticks(5);

  if (SelectedNeighbourhood ===null){
    return <g transform={`translate(${x},${y})`}>

    </g>
  }

  return "Hello World!";
}

export default TimeSeries;
