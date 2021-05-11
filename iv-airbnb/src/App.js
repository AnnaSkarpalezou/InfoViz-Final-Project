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
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";

function App() {
  const width = 1600;
  const height = 990;
  const margin = { top: 70, right: 40, bottom: 160, left: 60, gap: 40 };
  const [selectedCity, setSelectedCity] = React.useState(" ");

  const Select = (d) => {
    setSelectedCity(d);
    console.log("mouse over on");
    console.log(selectedCity.label);
  };

  if (selectedCity === " ") {
    return (
      <div className="App">
        <div
          id="coverPage"
          style={{
            margin: "2.2em 2.1em",
            color: "#57068c",
            backgroundColor: "floralwhite",
          }}
        >
          <div styles="text-align:center;">
            <h1
              x={100}
              y={200}
              id="vizTitle"
              style={{
                margin: "3em 3em 0",
                fontWeight: "bold",
                fontFamily: "Courier New, Courier, monospace",
                fontSize: "36px",
              }}
            >
              {"Visualizing Airbnb Data for Chinese Cities"}
            </h1>
            <h3
              class="list-item-name"
              style={{
                margin: "2em 3em 3em",
                fontWeight: "bold",
                fontFamily: "Courier New, Courier, monospace",
                fontSize: "28px",
              }}
            >
              Shanghai &amp; Beijing
            </h3>

            <ul
              style={{
                textAlign: "center",
                listStyle: "none",
              }}
            >
              <li style={{ margin: ".7em" }}>
                {" "}
                Which neighbourhoods offer the highest number of available
                airbnb listings?
              </li>
              <li style={{ margin: ".7em" }}>
                {" "}
                How do listing price rates differ from neighborhood to
                neighbourhood?
              </li>
              <li style={{ margin: ".7em" }}>
                {" "}
                How does the popularity of listings on Airbnb by neighbourhood
                change over the year?
              </li>
              <li style={{ margin: ".7em 0 5em" }}>
                {" "}
                What are the various categories of properties in China? What is
                their breakdown by neighbourhood?
              </li>
            </ul>
            <text x={100} y={200} id="vizTitle">
              {"Choose a city to get started!"}
            </text>
            <div
              id="dropdown"
              style={{
                width: "45%",
                paddingLeft: "27.5%",
                margin: "1em 0 3em",
              }}
            >
              <Dropdown
                style="position:absolute;left:0;top:0;"
                placeholder="Pick a City"
                options={["Shanghai", "Beijing"]}
                value="one"
                onChange={(d) => Select(d)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (selectedCity.label == "Shanghai") {
    return (
      <div className="App">
        <div id="pageOrder">
          <div
            id="coverPage"
            style={{ margin: "2.2em 2.1em", color: "#57068c" }}
          >
            <div styles="text-align:center;">
              <h1
                x={100}
                y={200}
                id="vizTitle"
                style={{
                  margin: "3em 3em 0",
                  fontWeight: "bold",
                  fontFamily: "Courier New, Courier, monospace",
                  fontSize: "36px",
                }}
              >
                {"Visualizing Airbnb Data for Chinese Cities"}
              </h1>
              <h3
                class="list-item-name"
                style={{
                  margin: "2em 3em 3em",
                  fontWeight: "bold",
                  fontFamily: "Courier New, Courier, monospace",
                  fontSize: "28px",
                }}
              >
                Shanghai &amp; Beijing
              </h3>

              <ul
                style={{
                  textAlign: "center",
                  listStyle: "none",
                }}
              >
                <li style={{ margin: ".7em" }}>
                  {" "}
                  Which neighbourhoods offer the highest number of available
                  airbnb listings?
                </li>
                <li style={{ margin: ".7em" }}>
                  {" "}
                  How do listing price rates differ from neighborhood to
                  neighbourhood?
                </li>
                <li style={{ margin: ".7em" }}>
                  {" "}
                  How does the popularity of listings on Airbnb by neighbourhood
                  change over the year?
                </li>
                <li style={{ margin: ".7em 0 5em" }}>
                  {" "}
                  What are the various categories of properties in China? What
                  is their breakdown by neighbourhood?
                </li>
              </ul>
              <text x={100} y={200} id="vizTitle">
                {"Choose a city to get started!"}
              </text>
              <div
                id="dropdown"
                style={{
                  width: "45%",
                  paddingLeft: "27.5%",
                  margin: "1em 0 3em",
                }}
              >
                <Dropdown
                  style="position:absolute;left:0;top:0;"
                  placeholder="Pick a City"
                  options={["Shanghai", "Beijing"]}
                  value="one"
                  onChange={(d) => Select(d)}
                />
              </div>
            </div>
          </div>

          <div id="Shanghai">
            <Shanghai name={"SHANGHAI"} />
          </div>
        </div>
      </div>
    );
  } else if (selectedCity.label == "Beijing") {
    return (
      <div className="App">
        <div id="pageOrder">
          <div
            id="coverPage"
            style={{ margin: "2.2em 2.1em", color: "#57068c" }}
          >
            <div styles="text-align:center;">
              <h1
                x={100}
                y={200}
                id="vizTitle"
                style={{
                  margin: "3em 3em 0",
                  fontWeight: "bold",
                  fontFamily: "Courier New, Courier, monospace",
                  fontSize: "36px",
                }}
              >
                {"Visualizing Airbnb Data for Chinese Cities"}
              </h1>
              <h3
                class="list-item-name"
                style={{
                  margin: "2em 3em 3em",
                  fontWeight: "bold",
                  fontFamily: "Courier New, Courier, monospace",
                  fontSize: "28px",
                }}
              >
                Shanghai &amp; Beijing
              </h3>

              <ul
                style={{
                  textAlign: "center",
                  listStyle: "none",
                }}
              >
                <li style={{ margin: ".7em" }}>
                  {" "}
                  Which neighbourhoods offer the highest number of available
                  airbnb listings?
                </li>
                <li style={{ margin: ".7em" }}>
                  {" "}
                  How do listing price rates differ from neighborhood to
                  neighbourhood?
                </li>
                <li style={{ margin: ".7em" }}>
                  {" "}
                  How does the popularity of listings on Airbnb by neighbourhood
                  change over the year?
                </li>
                <li style={{ margin: ".7em 0 5em" }}>
                  {" "}
                  What are the various categories of properties in China? What
                  is their breakdown by neighbourhood?
                </li>
              </ul>
              <text x={100} y={200} id="vizTitle">
                {"Choose a city to get started!"}
              </text>
              <div
                id="dropdown"
                style={{
                  width: "45%",
                  paddingLeft: "27.5%",
                  margin: "1em 0 3em",
                }}
              >
                <Dropdown
                  style="position:absolute;left:0;top:0;"
                  placeholder="Pick a City"
                  options={["Shanghai", "Beijing"]}
                  value="one"
                  onChange={(d) => Select(d)}
                />
              </div>
            </div>
          </div>

          <div id="Beijing">
            <Beijing name={"BEIJING"} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div id="dropdown">
          <Dropdown
            style="position:absolute;left:0;top:0;"
            placeholder="Pick a City"
            options={["Shanghai", "Beijing"]}
            value="one"
            onSelect={(d) => Select(d)}
          />
        </div>
      </div>
    );
  }
}

export default App;
