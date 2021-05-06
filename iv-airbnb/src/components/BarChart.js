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
    setSelectedNeighbourhood,
    path,
    neighbourhoodNames,
    neighbourhoodsCount,
    mouseHoveringOn, mouseHoveringOff, xScale, yScale
  } = props;
  
  const color = d => d.neighbourhood === selectedNeighbourhood? "red":"#99d594";
  //const colorD = d => d.neighbourhood === selectedNeighbourhood? "steelblue":"#fc8d59";

  const ticksx = xScale.domain();
  const ticksy = yScale.ticks(5);

  if (selectedNeighbourhood === null) {
      return <g transform={`translate(${x}, ${y})`} >
          <text style={{ textAnchor:'start', fontSize:'15px'}} transform={`translate(${width/3}, 0)`}>
                      {"Average Prices of Listings per neighbourhood"}
          </text>
          <line x1={0} y1={(height/2)} x2={width-400} y2={(height/2)} stroke={`black`} />
                  {ticksx.map( tickValue => {
                      return <g key={tickValue} transform={`translate(${xScale(tickValue)}, ${(height/2)})`}>
                              <line y2={5} stroke={"black"} />
                          </g> 
                      })}
          <line y1={(height-1000)} y2={(height/2)} stroke={`black`} />
                  {ticksy.map( tickValue => {
                      return <g key={tickValue} transform={`translate(-3, ${yScale(tickValue)})`}>
                              <line x2={10} stroke={"black"} />
                              <text style={{ textAnchor:'end', fontSize:'18px' }}>
                              {tickValue}
                              </text>
                          </g> 
                      })}
                      {data.map(d => {
                        console.log(d.neighbourhood);
                        console.log(d.price);
                        return <rect 
                        key={d.neighbourhood+'Bar'}
                        x={xScale(d.neighbourhood)} 
                        y={yScale(d.price)}
                        width={xScale.bandwidth()}              //error
                        height={height/2 - yScale(d.price)}  
                        fill={'#99d594'} 
                        stroke={"black"}
                        onMouseOver={() => mouseHoveringOn(d)}
                        onMouseOut={mouseHoveringOff}
                        />
                        })}

              </g>
  }else{
      return <g transform={`translate(${x}, ${y})`} >
          <text style={{ textAnchor:'start', fontSize:'15px'}} transform={`translate(${width/3}, 0)`}>
                      {"Average Prices of Listings per neighbourhood"}
          </text>
          <line x1={0} y1={(height/2)} x2={width-400} y2={(height/2)} stroke={`black`} />
                  {ticksx.map( tickValue => {
                      return <g key={tickValue} transform={`translate(${xScale(tickValue)}, ${(height/2)})`}>
                              <line y2={5} stroke={"black"} />
                          </g> 
                          
                      })}
          <line y1={(height-600)} y2={(height/2)} stroke={`black`} />
                  {ticksy.map( tickValue => {
                      return <g key={tickValue} transform={`translate(-3, ${yScale(tickValue)})`}>
                              <line x2={10} stroke={"black"} />
                              <text style={{ textAnchor:'end', fontSize:'18px' }}>
                              {tickValue}
                              </text>
                          </g> 
                      })}
 
          {data.map(d => {
              //console.log(key);
              return <rect 
              key={d.neighbourhood+'Bar'}
              x={xScale(d.neighbourhood)} 
              y={yScale(d.price)}
              width={xScale.bandwidth()}              //error
              height={height/2 - yScale(d.price)}  
              fill={color(d)} 
              stroke={"black"}
              onMouseOver={() => mouseHoveringOn(d)}
              onMouseOut={mouseHoveringOff}
              />
              })}
              </g>

      }
  }
  


export default BarChart;