import React from "react";
import * as d3 from "d3";
import legend from "./Legend.js";
import { select } from "d3";
import Legend from "./Legend.js";

function useMap(jsonPath) {
  const [data, setData] = React.useState({ type: "", features: [] });

  React.useEffect(() => {
    d3.json(jsonPath).then((geoJsonData) => {
      setData(geoJsonData);
    });
  }, []);
  return data;
}

function GenerateMap(props) {
  const {
    x,
    y,
    WIDTH,
    HEIGHT,
    data,
    selectedNeighbourhood,
    setSelectedNeighbourhood,
    path,
    neighbourhoodNames,
    neighbourhoodsCount,
    setTooltipX,
    setTooltipY,
    name,
  } = props;

  const mapData = useMap(path);

  const projection = d3.geoMercator().fitSize([WIDTH, HEIGHT], mapData);
  const mapPathing = d3.geoPath(projection);

  const legendStart = [30, 40];
  //   const radius = d3
  //     .scaleLinear()
  //     .range([2, 20])
  //     .domain([d3.min(data, (d) => d.start), d3.max(data, (d) => d.start)]);

  let neighbourhoods = mapData.features.map((feature, idx) => {
    let color = "#57068c";
    let opacity = 1;

    if (neighbourhoodsCount[idx].length > 10000) {
      color = "#57068c";
    } else if (neighbourhoodsCount[idx].length > 3000) {
      color = "#702b9d";
    } else if (neighbourhoodsCount[idx].length > 2000) {
      color = "#8950ae";
    } else if (neighbourhoodsCount[idx].length > 1000) {
      color = "#a376c0";
    } else if (neighbourhoodsCount[idx].length > 600) {
      color = "#bc9bd1";
    } else if (neighbourhoodsCount[idx].length > 200) {
      color = "#d5c1e2";
    } else {
      color = "#eee6f3";
    }

    if (selectedNeighbourhood != " ") {
      opacity = 0.7;
    }

    if (neighbourhoodNames[idx] == selectedNeighbourhood) {
      color = "#e60969";
      opacity = 1;
    }

    return (
      <path
        key={idx + "boundary"}
        className={"boundary"}
        id={"neighbourhood" + idx}
        d={mapPathing(feature)}
        fill={color}
        fillOpacity={opacity}
        stroke={"#57068c"}
        strokeWidth={"1px"}
        neighbourhood={neighbourhoodNames[idx]}
        onMouseEnter={(event) => {
          setSelectedNeighbourhood(neighbourhoodNames[idx]);
          setTooltipX(event.pageX);
          setTooltipY(event.pageY);
        }}
        onMouseLeave={() => {
          setSelectedNeighbourhood(" ");
          setTooltipX(null);
          setTooltipY(null);
        }}
      />
    );
  });

  return (
    <svg width={WIDTH} height={HEIGHT}>
      {selectedNeighbourhood}
      <g id="neighbourhoods" transform={`translate(${x}, ${y}) scale(.75)`}>
        {neighbourhoods}
      </g>

      <Legend x={legendStart[0]} y={legendStart[1]} />
      <text x={30} y={40} id="vizTitle">
        AIRBNBS IN {name}
      </text>
    </svg>
  );
}

export default GenerateMap;
