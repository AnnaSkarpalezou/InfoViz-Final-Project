import React from "react";
import "./App.css";
import GenerateMap from "./components/Map.js";

function App() {
  // const [selectedBNB, setSelectedBNB] = React.useState(null);

  const width = 500;
  const height = 500;
  const margin = { top: 0, right: 40, bottom: 160, left: 0, gap: 40 };
  const innerWidth = width - margin.left - margin.right - margin.gap;
  const innerHeight = height - margin.top - margin.bottom - margin.gap;

  const dataPath = "./data/listings.csv";
  const mapPath = "./data/neighbourhoods.geojson";

  return (
    <div className="App">
      <div>
        <GenerateMap
          x={margin.left}
          y={margin.top}
          WIDTH={innerWidth / 2}
          HEIGHT={innerHeight + margin.gap}
          data={dataPath}
          path={mapPath}
        />
      </div>
    </div>
  );
}

export default App;
