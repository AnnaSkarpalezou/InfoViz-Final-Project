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
        onChange={(d) => Select(d)}
      />
      </div>
      <div><block></block></div>
      <div> 

      <li class="list-item">
        <div class="list-item-column list-item-column--avatar">
        </div>
          <div class="list-item-column list-item-column--info">
            <text x={30} y={200} id="vizTitle">
              {"Visualizing Airbnb Data for Chinese Cities"}
            </text>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <h3 class="list-item-name">Eva Ferguson</h3>
            <h4 class="list-item-title">Founder &amp; Lead Developer</h4>
            <div class="list-item-biography">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quisquam asperiores laborum quae doloremque voluptates explicabo libero deserunt qui. Atque!</p>
            </div>
            <text x={30} y={200} id="vizTitle">
              {"Choose a city to get started!"}
            </text>
          </div>
        </li>
      </div>
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
          onSelect={(d) => Select(d)}
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
        onSelect={(d) => Select(d)}
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
        onSelect={(d) => Select(d)}
      />
      </div>

    </div>
  );
}

}

export default App;
