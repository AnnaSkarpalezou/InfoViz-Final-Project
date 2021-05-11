import React from "react";
import "./App.css";
import GenerateMap from "./components/Map.js";
import Polygon from "./components/Polygon.js";
import TimeSeries from "./components/TimeSeries.js";
import BarChartB from "./components/BarChartB.js";
import Tooltip from "./components/Tooltip.js";
import * as d3 from "d3";
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';

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

function Beijing(props) {
  const {
    name
  }=props;
  const [selectedNeighbourhood, setSelectedNeighbourhood] = React.useState(" ");
  const [tooltipX, setTooltipX] = React.useState(null);
  const [tooltipY, setTooltipY] = React.useState(null);


  const width = 1500;
  const height = 990;
  const margin = { top: 70, right: 40, bottom: 160, left: 60, gap: 40 };
  const innerWidth = width - margin.left - margin.right - margin.gap;
  const innerHeight = height - margin.top - margin.bottom - margin.gap;

  const uiPolyHeight = window.innerHeight / 2;
  const uiPolyWidth = 150;
  const polyRef = React.useRef(null);

  const dataPath = "./data/listingsB.csv";
  const mapPath = "./data/neighbourhoodsB.geojson";
  const PricePath = "./data/av_pricesB.csv";
  const TooltipPath = "./data/tooltip_statsB.csv";
  const monthPath = "./data/neighbourhood_monthsB.csv";

  const dataAll = useData(dataPath);
  const PriceData = useData(PricePath);
  const TooltipData = useData(TooltipPath);
  const monthData = useData(monthPath);
  console.log(monthData)
  
  // console.log("FFFFF");
  // console.log(TooltipData);

  const neighbourhoodNames = 
    ['东城区',
    '丰台区 / Fengtai',
    '大兴区 / Daxing',
    '密云县 / Miyun',
    '平谷区 / Pinggu',
    '延庆县 / Yanqing',
    '怀柔区 / Huairou',
    '房山区',
    '昌平区',
    '朝阳区 / Chaoyang',
    '海淀区',
    '石景山区',
    '西城区',
    '通州区 / Tongzhou',
    '门头沟区 / Mentougou',
    '顺义区 / Shunyi'];

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
    if (d.neighbourhood === '东城区') {
      neighbourhoodGrouping[0].push(d);
    }
    //"黄浦区 / Huangpu District"
    if (d.neighbourhood === '丰台区 / Fengtai') {
      neighbourhoodGrouping[1].push(d);
    }
    //"浦东新区 / Pudong"
    if (d.neighbourhood === '大兴区 / Daxing') {
      neighbourhoodGrouping[2].push(d);
    }
    //"杨浦区 / Yangpu District"
    if (d.neighbourhood === '密云县 / Miyun') {
      neighbourhoodGrouping[3].push(d);
    }
    //"虹口区 / Hongkou District"
    if (d.neighbourhood === '平谷区 / Pinggu') {
      neighbourhoodGrouping[4].push(d);
    }
    //"静安区 / Jing'an District"
    if (d.neighbourhood === '延庆县 / Yanqing') {
      neighbourhoodGrouping[5].push(d);
    }
    //"宝山区 / Baoshan District"
    if (d.neighbourhood === '怀柔区 / Huairou') {
      neighbourhoodGrouping[6].push(d);
    }
    //"普陀区 / Putuo District"
    if (d.neighbourhood === '房山区') {
      neighbourhoodGrouping[7].push(d);
    }
    //"长宁区 / Changning District"
    if (d.neighbourhood === '昌平区') {
      neighbourhoodGrouping[8].push(d);
    }
    //"徐汇区 / Xuhui District"
    if (d.neighbourhood === '朝阳区 / Chaoyang') {
      neighbourhoodGrouping[9].push(d);
    }
    //"闵行区 / Minhang District"
    if (d.neighbourhood === '海淀区') {
      neighbourhoodGrouping[10].push(d);
    }
    //"嘉定区 / Jiading District"
    if (d.neighbourhood === '石景山区') {
      neighbourhoodGrouping[11].push(d);
    }
    //"崇明区 / Chongming District"
    if (d.neighbourhood === '西城区') {
      neighbourhoodGrouping[12].push(d);
    }
    //"奉贤区 / Fengxian District"
    if (d.neighbourhood === '通州区 / Tongzhou') {
      neighbourhoodGrouping[13].push(d);
    }
    //"金山区 / Jinshan District"
    if (d.neighbourhood ==='门头沟区 / Mentougou') {
      neighbourhoodGrouping[14].push(d);
    }
    //"松江区 / Songjiang District"
    if (d.neighbourhood === '顺义区 / Shunyi') {
      neighbourhoodGrouping[15].push(d);
    }
  });

  const selected = TooltipData.filter(
    (d) => d.neighbourhood === selectedNeighbourhood
  )[0];

  const districtData = monthData.filter( d=> {
    return d.neighbourhood == selectedNeighbourhood;
  });

  const mouseHoveringOn = (d) => {
    setSelectedNeighbourhood(d.neighbourhood);
    setTooltipX(480);
    setTooltipY(550);
    console.log("mouse over on");
  };
  const mouseHoveringOff = () => {
    setSelectedNeighbourhood(" ");
    console.log("mouse over off");
    setTooltipX(null);
    setTooltipY(null);
  };

  const xScaleBar = d3
    .scaleBand()
    .range([100, window.innerWidth - 800])
    .domain(PriceData.map((d) => d.neighbourhood));

  const yScaleBar = d3
    .scaleLinear()
    .range([window.innerHeight / 4, 0])
    .domain([0, d3.max(PriceData, (d) => Number(d.price))])
    .nice();

  const xScaleArea =  d3.scaleBand()
    .range([0, (innerWidth-800)])
    .domain(districtData.map((d)=> d.date));

  const yScaleArea = d3.scaleLinear()
    .range([window.innerHeight/4 + 25,0])
    .domain([0, d3.max(districtData, d => Number(d.total))])
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



  
  // normal usage


  return (
    <div className="App">


      <div id="choropleth">

        <GenerateMap
          x={margin.left}
          y={margin.top+50}
          WIDTH={innerWidth / 2}
          HEIGHT={innerHeight + margin.gap+50}
          data={dataAll}
          path={mapPath}
          setSelectedNeighbourhood={setSelectedNeighbourhood}
          selectedNeighbourhood={selectedNeighbourhood}
          neighbourhoodNames={neighbourhoodNames}
          neighbourhoodsCount={neighbourhoodGrouping}
          setTooltipX={setTooltipX} 
          setTooltipY={setTooltipY}
          name={name}
        />

        <div id="selectNeighbourhood">{": " + selectedNeighbourhood}</div>

        <Tooltip
          d={selectedNeighbourhood}
          data={TooltipData}
          left={tooltipX}
          top={tooltipY}
          height={innerHeight / 2}
          width={(innerWidth / 2)+500}
          xScale={xScaleBar}
          yScale={yScaleBar}
        />
        </div>


        <div id="derivatives">
        <svg height={window.innerHeight/2} style={{backgroundColor:'floralwhite'}} >
          <BarChartB 
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
            setTooltipX={setTooltipX} 
            setTooltipY={setTooltipY}
          />

        </svg>
        <svg height={window.innerHeight/2} style={{backgroundColor:'floralwhite'}}>
        <TimeSeries
          data={districtData}
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

export default Beijing;
