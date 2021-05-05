import React from "react";
import "./App.css";
import GenerateMap from "./components/Map.js";
import TimeSeries from "./components/TimeSeries.js";
import * as d3 from "d3";

function useData(csvPath) {
  const [dataAll, setData] = React.useState([]);
  React.useEffect(() => {
    d3.csv(csvPath).then((data) => {
      data.forEach((d) => {});
      setData(data);
    });
  }, []);

  // console.log(dataAll);
  return dataAll;
}

function App() {
  const [selectedNeighbourhood, setSelectedNeighbourhood] = React.useState(
    null
  );

  const width = 1800;
  const height = 800;
  const margin = { top: 70, right: 40, bottom: 160, left: 60, gap: 40 };
  const innerWidth = width - margin.left - margin.right - margin.gap;
  const innerHeight = height - margin.top - margin.bottom - margin.gap;

  const dataPath = "./data/listings.csv";
  const mapPath = "./data/neighbourhoods.geojson";

  const dataAll = useData(dataPath);

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

  return (
    <div className="App">
      <div>
        {"Selected Neighbourhood: " + selectedNeighbourhood}
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
        />
      </div>
      <TimeSeries />
    </div>
  );
}

export default App;
