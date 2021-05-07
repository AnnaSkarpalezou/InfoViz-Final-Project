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

    return <g transform={`translate(${x}, ${y})`}>
  <path d={p1} fill={'lightgreen'} stroke={'black'} />
  <path d={p2} fill={'pink'} stroke={'black'} />
  <text style={{ textAnchor:'end', fontSize:'15px'}} transform={`translate(${width + 50}, ${50})rotate(0)`}>
          {"Start"}
  </text>
  <text style={{ textAnchor:'end', fontSize:'15px'}} transform={`translate(${width - 160}, ${-5})rotate(0)`}>
          {"Num. of riders over the year"}
  </text>
  <g transform={`translate(${offsetX}, ${offsetY+height/2})`}>
      
      <text style={{ textAnchor:'end', fontSize:'15px'}} transform={`translate(${width + 50}, ${180})rotate(0)`}>
          {"End"}
  </text>
  </g>
  </g>
}

export default TimeSeries;
