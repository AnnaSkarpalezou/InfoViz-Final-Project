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
    WIDTH,
    HEIGHT,
    data,
    selectedBNB,
    setSelectedBNB,
    path,
  } = props;

  const mapData = useMap(path);
  let neighbourhoodsCount = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];

  data.filter(function (d) {
    //"青浦区 / Qingpu District"
    if (d.neighbourhood === "青浦区 / Qingpu District") {
      neighbourhoodsCount[0].push(d);
    }
    //"黄浦区 / Huangpu District"
    if (d.neighbourhood === "黄浦区 / Huangpu District") {
      neighbourhoodsCount[1].push(d);
    }
    //"浦东新区 / Pudong"
    if (d.neighbourhood === "浦东新区 / Pudong") {
      neighbourhoodsCount[2].push(d);
    }
    //"杨浦区 / Yangpu District"
    if (d.neighbourhood === "杨浦区 / Yangpu District") {
      neighbourhoodsCount[3].push(d);
    }
    //"虹口区 / Hongkou District"
    if (d.neighbourhood === "虹口区 / Hongkou District") {
      neighbourhoodsCount[4].push(d);
    }
    //"静安区 / Jing'an District"
    if (d.neighbourhood === "静安区 / Jing'an District") {
      neighbourhoodsCount[5].push(d);
    }
    //"宝山区 / Baoshan District"
    if (d.neighbourhood === "宝山区 / Baoshan District") {
      neighbourhoodsCount[6].push(d);
    }
    //"普陀区 / Putuo District"
    if (d.neighbourhood === "普陀区 / Putuo District") {
      neighbourhoodsCount[7].push(d);
    }
    //"长宁区 / Changning District"
    if (d.neighbourhood === "长宁区 / Changning District") {
      neighbourhoodsCount[8].push(d);
    }
    //"徐汇区 / Xuhui District"
    if (d.neighbourhood === "徐汇区 / Xuhui District") {
      neighbourhoodsCount[9].push(d);
    }
    //"闵行区 / Minhang District"
    if (d.neighbourhood === "闵行区 / Minhang District") {
      neighbourhoodsCount[10].push(d);
    }
    //"嘉定区 / Jiading District"
    if (d.neighbourhood === "嘉定区 / Jiading District") {
      neighbourhoodsCount[11].push(d);
    }
    //"崇明区 / Chongming District"
    if (d.neighbourhood === "崇明区 / Chongming District") {
      neighbourhoodsCount[12].push(d);
    }
    //"奉贤区 / Fengxian District"
    if (d.neighbourhood === "奉贤区 / Fengxian District") {
      neighbourhoodsCount[13].push(d);
    }
    //"金山区 / Jinshan District"
    if (d.neighbourhood === "金山区 / Jinshan District") {
      neighbourhoodsCount[14].push(d);
    }
    //"松江区 / Songjiang District"
    if (d.neighbourhood === "松江区 / Songjiang District") {
      neighbourhoodsCount[15].push(d);
    }
  });

  const projection = d3.geoMercator().fitSize([WIDTH, HEIGHT], mapData);
  const mapPathing = d3.geoPath(projection);
  //   const radius = d3
  //     .scaleLinear()
  //     .range([2, 20])
  //     .domain([d3.min(data, (d) => d.start), d3.max(data, (d) => d.start)]);

  return (
    <svg width={WIDTH} height={HEIGHT}>
      <g id="neighbourhoods" transform={`translate(${x}, ${y}) scale(.7)`}>
        {mapData.features.map((feature, idx) => {
          let color = "#57068c";
          let opacity = 1;
          if (neighbourhoodsCount[idx].length > 10000) {
            opacity = 1;
          } else if (neighbourhoodsCount[idx].length > 3000) {
            opacity = 0.85;
          } else if (neighbourhoodsCount[idx].length > 2000) {
            opacity = 0.7;
          } else if (neighbourhoodsCount[idx].length > 1000) {
            opacity = 0.55;
          } else if (neighbourhoodsCount[idx].length > 600) {
            opacity = 0.4;
          } else if (neighbourhoodsCount[idx].length > 200) {
            opacity = 0.25;
          } else {
            opacity = 0.1;
          }

          return (
            <path
              key={idx + "boundary"}
              className={"boundary"}
              d={mapPathing(feature)}
              fill={color}
              fillOpacity={opacity}
            />
          );
        })}
      </g>
    </svg>
  );
}

export default GenerateMap;
