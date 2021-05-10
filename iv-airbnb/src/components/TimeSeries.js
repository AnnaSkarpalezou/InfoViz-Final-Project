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
    .y0(height - 129)
    .y1(d => yScale(Number(d.total)))
    .curve(d3.curveBasis)
    (data);

    return <g transform={`translate(${x + 105}, ${y + 50})`} >
      <path d={p1} fill={'darkblue'} />
      <text transform={`translate(${180}, ${-55})rotate(0)`} style={{fontSize:'20px' }}>
                    {'Popularity of District'}

            </text>
      <text transform={`translate(${-55}, ${-30})rotate(0)`} style={{fontSize:'18px' }}>
                    {"Total Reviews"}
            </text>
      <text transform={`translate(${width + 200}, ${height - 87})rotate(0)`} style={{fontSize:'18px' }}>
                    {"Month"}
            </text>
      <line x1={0} y1={(height - 129)} x2={width-150} y2={(height - 129)} stroke={`black`} />
      {ticksX.map( tickValue => {
        return <g key={tickValue} transform={`translate(${xScale(tickValue)}, ${(height) - 129})`}>
                <line y2={10} stroke={"black"} />
                <text transform= 'translate(5,-25)' style={{ textAnchor:'end', fontSize:'15px'}} y={50}>
                {tickValue}
                </text>
                </g>
              })}
      <line y1={(height - 129)} y2={(height - 360)} stroke={`black`} />
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
