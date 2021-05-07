import React from "react";
import "./App.css";
import GenerateMap from "./components/Map.js";
import Polygon from "./components/Polygon.js";
import TimeSeries from "./components/TimeSeries.js";
import BarChart from "./components/BarChart.js";
import Tooltip from "./components/Tooltip.js";
import * as d3 from "d3";

function useData(csvPath) {
  const [dataAll, setData] = React.useState([]);
  React.useEffect(() => {
    d3.csv(csvPath).then((data) => {
      // data.forEach((d) => {});
      setData(data);
    });
  }, []);

  // console.log(dataAll);
  return dataAll;
}

function App() {
  const [selectedNeighbourhood, setSelectedNeighbourhood] = React.useState(" ");

  const width = 1500;
  const height = 990;
  const margin = { top: 70, right: 40, bottom: 160, left: 60, gap: 40 };
  const innerWidth = width - margin.left - margin.right - margin.gap;
  const innerHeight = height - margin.top - margin.bottom - margin.gap;

  const uiPolyHeight = window.innerHeight / 2;
  const uiPolyWidth = 150;
  const polyRef = React.useRef(null);

  const dataPath = "./data/listings.csv";
  const mapPath = "./data/neighbourhoods.geojson";
  const PricePath = "./data/av_prices.csv";
  const TooltipPath = "./data/tooltip_stats.csv";
  const monthPath = "./data/neighbourhood_months.csv";

  const dataAll = useData(dataPath);
  const PriceData = useData(PricePath);
  const TooltipData = useData(TooltipPath);
  const monthData = useData(monthPath);
  console.log("FFFFF");
  console.log(TooltipData);

  const neighbourhoodNames = [
    "青浦区 / Qingpu District",
    "黄浦区 / Huangpu District",
    "浦东新区 / Pudong",
    "杨浦区 / Yangpu District",
    "虹口区 / Hongkou District",
    "静安区 / Jing'an District",
    "宝山区 / Baoshan District",
    "普陀区 / Putuo District",
    "长宁区 / Changning District",
    "徐汇区 / Xuhui District",
    "闵行区 / Minhang District",
    "嘉定区 / Jiading District",
    "崇明区 / Chongming District",
    "奉贤区 / Fengxian District",
    "金山区 / Jinshan District",
    "松江区 / Songjiang District",
  ];

  let neighbourhoodGrouping = [
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

  dataAll.filter(function (d) {
    //"青浦区 / Qingpu District"
    if (d.neighbourhood === "青浦区 / Qingpu District") {
      neighbourhoodGrouping[0].push(d);
    }
    //"黄浦区 / Huangpu District"
    if (d.neighbourhood === "黄浦区 / Huangpu District") {
      neighbourhoodGrouping[1].push(d);
    }
    //"浦东新区 / Pudong"
    if (d.neighbourhood === "浦东新区 / Pudong") {
      neighbourhoodGrouping[2].push(d);
    }
    //"杨浦区 / Yangpu District"
    if (d.neighbourhood === "杨浦区 / Yangpu District") {
      neighbourhoodGrouping[3].push(d);
    }
    //"虹口区 / Hongkou District"
    if (d.neighbourhood === "虹口区 / Hongkou District") {
      neighbourhoodGrouping[4].push(d);
    }
    //"静安区 / Jing'an District"
    if (d.neighbourhood === "静安区 / Jing'an District") {
      neighbourhoodGrouping[5].push(d);
    }
    //"宝山区 / Baoshan District"
    if (d.neighbourhood === "宝山区 / Baoshan District") {
      neighbourhoodGrouping[6].push(d);
    }
    //"普陀区 / Putuo District"
    if (d.neighbourhood === "普陀区 / Putuo District") {
      neighbourhoodGrouping[7].push(d);
    }
    //"长宁区 / Changning District"
    if (d.neighbourhood === "长宁区 / Changning District") {
      neighbourhoodGrouping[8].push(d);
    }
    //"徐汇区 / Xuhui District"
    if (d.neighbourhood === "徐汇区 / Xuhui District") {
      neighbourhoodGrouping[9].push(d);
    }
    //"闵行区 / Minhang District"
    if (d.neighbourhood === "闵行区 / Minhang District") {
      neighbourhoodGrouping[10].push(d);
    }
    //"嘉定区 / Jiading District"
    if (d.neighbourhood === "嘉定区 / Jiading District") {
      neighbourhoodGrouping[11].push(d);
    }
    //"崇明区 / Chongming District"
    if (d.neighbourhood === "崇明区 / Chongming District") {
      neighbourhoodGrouping[12].push(d);
    }
    //"奉贤区 / Fengxian District"
    if (d.neighbourhood === "奉贤区 / Fengxian District") {
      neighbourhoodGrouping[13].push(d);
    }
    //"金山区 / Jinshan District"
    if (d.neighbourhood === "金山区 / Jinshan District") {
      neighbourhoodGrouping[14].push(d);
    }
    //"松江区 / Songjiang District"
    if (d.neighbourhood === "松江区 / Songjiang District") {
      neighbourhoodGrouping[15].push(d);
    }
  });

  const selected = TooltipData.filter(
    (d) => d.neighbourhood === selectedNeighbourhood
  )[0];

  const mouseHoveringOn = (d) => {
    setSelectedNeighbourhood(d.neighbourhood);
    console.log("mouse over on");
  };
  const mouseHoveringOff = () => {
    setSelectedNeighbourhood(" ");
    console.log("mouse over off");
  };

  const xScaleBar = d3
    .scaleBand()
    .range([100, window.innerWidth - 800])
    .domain(PriceData.map((d) => d.neighbourhood));

  const yScaleBar = d3
    .scaleLinear()
    .range([window.innerHeight / 8, 0])
    .domain([0, d3.max(PriceData, (d) => d.price)])
    .nice();

  const xScaleArea =  d3.scaleBand()
    .range([0, (innerWidth-420)])
    .domain(monthData.map((d)=> d.date));

  const yScaleArea = d3.scaleLinear()
    .range([innerHeight/4,20])
    .domain([0, d3.max(monthData, d => d.total)])
    .nice();



  if (polyRef.current != null) {
    if (
      selectedNeighbourhood != " " &&
      polyRef.current.style.animationName != "removePoly"
    ) {
      polyRef.current.style.animation = "removePoly ease-out 0.5s forwards";
    } else if (
      selectedNeighbourhood == " " &&
      polyRef.current.style.animationName != "removePolyrev"
    ) {
      polyRef.current.style.animation = "removePolyrev ease-out 0.5s forwards";
    }
  }

  return (
    <div className="App">
      <div id="choropleth">
        <GenerateMap
          x={margin.left}
          y={margin.top}
          WIDTH={innerWidth / 2}
          HEIGHT={innerHeight + margin.gap}
          data={dataAll}
          path={mapPath}
          setSelectedNeighbourhood={setSelectedNeighbourhood}
          selectedNeighbourhood={selectedNeighbourhood}
          neighbourhoodNames={neighbourhoodNames}
          neighbourhoodsCount={neighbourhoodGrouping}
        />
        <div id="selectNeighbourhood">{": " + selectedNeighbourhood}</div>

        <Tooltip
          d={selectedNeighbourhood}
          data={TooltipData}
          left={margin.gap}
          top={margin.top + 80 + innerHeight / 2}
          height={innerHeight / 2}
          width={(innerWidth / 2)+500}
          xScale={xScaleBar}
          yScale={yScaleBar}
        />
      </div>

      <div id="derivatives">
        <svg height={window.innerHeight/2} style={{backgroundColor:'floralwhite'}}>
          <BarChart 
            x={margin.left}
            y={margin.top+200}
            width={innerWidth / 2}
            height={window.innerHeight/3 + margin.gap }
            data={PriceData}
            setSelectedNeighbourhood={setSelectedNeighbourhood}
            selectedNeighbourhood={selectedNeighbourhood}
            neighbourhoodNames={neighbourhoodNames}
            neighbourhoodsCount={neighbourhoodGrouping}
            mouseHoveringOn={mouseHoveringOn}
            mouseHoveringOff={mouseHoveringOff}
            xScale={xScaleBar}
            yScale={yScaleBar}
          />
        </svg>
        <svg height={window.innerHeight/2}>
          <TimeSeries
            data={monthData}
            x={50}
            y={50}
            width={innerWidth/2}
            height={innerHeight/2}
            xScale={xScaleArea}
            yScale={yScaleArea}
            neighbourhoodNames={neighbourhoodNames}
            setSelectedNeighbourhood={setSelectedNeighbourhood}
            selectedNeighbourhood={selectedNeighbourhood}
            mouseHoveringOn={mouseHoveringOn}
            mouseHoveringOff={mouseHoveringOff}
          />
        </svg>
        <svg
          width={uiPolyWidth}
          height={window.innerHeight}
          id="polygons"
          ref={polyRef}
        >
          <Polygon
            points={[
              0 + "," + 0,
              uiPolyWidth + "," + 0,
              0 + "," + uiPolyHeight,
            ]}
          />
          <Polygon
            points={[
              0 + "," + uiPolyHeight,
              uiPolyWidth + "," + window.innerHeight,
              0 + "," + window.innerHeight,
            ]}
          />
        </svg>
      </div>
    </div>
  );
}

export default App;
