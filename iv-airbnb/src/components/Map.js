import React from "react";
import * as d3 from "d3";

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
    data,
    WIDTH,
    HEIGHT,
    selectedBNB,
    setSelectedBNB,
    path,
  } = props;

  const mapData = useMap(path);

  console.log(mapData);

  const projection = d3.geoMercator().fitSize([WIDTH, HEIGHT], mapData);
  const mapPathing = d3.geoPath(projection);
  //   const radius = d3
  //     .scaleLinear()
  //     .range([2, 20])
  //     .domain([d3.min(data, (d) => d.start), d3.max(data, (d) => d.start)]);

  return (
    <svg width={WIDTH} height={HEIGHT}>
      <g transform={`translate(${x}, ${y})`}>
        {mapData.features.map((feature, idx) => {
          let color = "black";
          if (idx == 0) {
            color = "steelblue";
          }
          return (
            <path
              key={idx + "boundary"}
              className={"boundary"}
              d={mapPathing(feature)}
              fill={color}
            />
          );
        })}
      </g>
    </svg>
  );
}

export default GenerateMap;
