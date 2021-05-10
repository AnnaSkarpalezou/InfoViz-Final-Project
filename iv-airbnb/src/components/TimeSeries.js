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
  const ticksY = yScale.ticks(10);

  const p1 = d3.area()
    .x(d => xScale(d.date))
    .y0(height - 92)
    .y1(d => yScale(Number(d.total)))
    .curve(d3.curveBasis)
    (data);
    console.log()

    return <g transform={`translate(${x + 70}, ${y + 50})`} >
      <path d={p1} fill={'darkblue'} />
      <text transform={`translate(${315}, ${-75})rotate(0)`} style={{fontSize:'20px' }}>
                    {'Popularity of'}
            </text>
      <text transform={`translate(${-55}, ${-30})rotate(0)`} style={{fontSize:'20px' }}>
                    {"Total Reviews"}
            </text>
      <text transform={`translate(${width + 200}, ${height - 87})rotate(0)`} style={{fontSize:'20px' }}>
                    {"Month"}
            </text>
      <line x1={0} y1={(height - 92)} x2={width + 180} y2={(height - 92)} stroke={`black`} />
      {ticksX.map( tickValue => {
        return <g key={tickValue} transform={`translate(${xScale(tickValue)}, ${(height) - 92})`}>
                <line y2={10} stroke={"black"} />
                <text transform= 'translate(12,-25)' style={{ textAnchor:'end', fontSize:'15px'}} y={50}>
                {tickValue}
                </text>
                </g>
              })}
      <line y1={(height - 92)} y2={(height - 360)} stroke={`black`} />
      {ticksY.map( tickValue => {
        return <g key={tickValue} transform={`translate(-5, ${yScale(tickValue)})`}>
                <line x2={5} stroke={"black"} />
                <text style={{ textAnchor:'end', fontSize:'15px' }}>
                {tickValue}
                </text>
            </g> 
        })}
  </g>
  }

export default TimeSeries;
