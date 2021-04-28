import React from "react";
import "./App.css";
import GenerateMap from "./components/Map.js";
import * as d3 from "d3";

function useData(csvPath) {
  const [dataAll, setData] = React.useState([]);
  React.useEffect(() => {
    d3.csv(csvPath).then((data) => {
      data.forEach((d) => {});
      setData(data);
    });
  }, []);

  console.log(dataAll);
  return dataAll;
}

function App() {
  // const [selectedBNB, setSelectedBNB] = React.useState(null);

  const width = 1800;
  const height = 800;
  const margin = { top: 70, right: 40, bottom: 160, left: 60, gap: 40 };
  const innerWidth = width - margin.left - margin.right - margin.gap;
  const innerHeight = height - margin.top - margin.bottom - margin.gap;

  const dataPath = "./data/listings.csv";
  const mapPath = "./data/neighbourhoods.geojson";

  const dataAll = useData(dataPath);

  return (
    <div className="App">
      <div>
        <GenerateMap
          x={margin.left}
          y={margin.top}
          WIDTH={innerWidth / 2}
          HEIGHT={innerHeight + margin.gap}
          data={dataAll}
          path={mapPath}
        />
      </div>
    </div>
  );
}

export default App;
