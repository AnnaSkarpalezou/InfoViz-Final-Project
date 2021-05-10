import React from "react";
import "./App.css";
import Shanghai from "./Shanghai.js";
import Beijing from "./Beijing.js";
import GenerateMap from "./components/Map.js";
import Polygon from "./components/Polygon.js";
import TimeSeries from "./components/TimeSeries.js";
import BarChart from "./components/BarChart.js";
import Tooltip from "./components/Tooltip.js";
import * as d3 from "d3";
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';



function App() {

  const width = 1500;
  const height = 990;
  const margin = { top: 70, right: 40, bottom: 160, left: 60, gap: 40 };
  const [selectedCity, setSelectedCity] = React.useState(" ");

  const Select = (d) => {
    
    setSelectedCity(d);
    console.log("mouse over on");
    console.log(selectedCity.label);
    
  };



if(selectedCity===" "){
  return (
    <div className="App">
      <div id="dropdown">        
      <Dropdown
        style="position:absolute;left:0;top:0;"
        placeholder="Pick a City"
        options={['Shanghai', 'Beijing']}
        value="one"
        //onChange={(value) => console.log('change!', value)}
        onChange={(d) => Select(d)}// always fires once a selection happens even if there is no change
        //onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
        //onOpen={() => console.log('open!')}
      />
      </div>
      <text style={{ textAnchor: "start", fontSize:'20px'}} transform={`translate(${width / 3 -50}, -140)`}>
        {"Choose a city to get started!"}
      </text>
  </div>)
} else if(selectedCity.label=='Shanghai'){
    return (
      <div className="App">
        <div id="dropdown">        
        <Dropdown
          style="position:absolute;left:0;top:0;"
          placeholder="Pick a City"
          options={['Shanghai', 'Beijing']}
          value="one"
          //onChange={(value) => console.log('change!', value)}
          onSelect={(d) => Select(d)}// always fires once a selection happens even if there is no change
          //onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
          //onOpen={() => console.log('open!')}
        />
        </div>

        <div id="Shanghai" >
          <Shanghai
          name={'SHANGHAI'}
          />
        </div>
      </div>
    );
}else if(selectedCity.label=='Beijing'){
  return (
    <div className="App">
      <div id="dropdown">        
      <Dropdown
        style="position:absolute;left:0;top:0;"
        placeholder="Pick a City"
        options={['Shanghai', 'Beijing']}
        value="one"
        //onChange={(value) => console.log('change!', value)}
        onSelect={(d) => Select(d)}// always fires once a selection happens even if there is no change
        //onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
        //onOpen={() => console.log('open!')}
      />
      </div>

      <div id="Beijing" >
        <Beijing
        name={'BEIJING'}
        />

      </div>

    </div>
  );
}else{
  return (
    <div className="App">
      <div id="dropdown">        
      <Dropdown
        style="position:absolute;left:0;top:0;"
        placeholder="Pick a City"
        options={['Shanghai', 'Beijing']}
        value="one"
        //onChange={(value) => console.log('change!', value)}
        onSelect={(d) => Select(d)}// always fires once a selection happens even if there is no change
        //onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
        //onOpen={() => console.log('open!')}
      />
      </div>

    </div>
  );
}

}

export default App;
