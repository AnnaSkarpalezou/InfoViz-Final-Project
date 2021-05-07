import React from "react";
import * as d3 from "d3";
import GenerateMap from "./Map";
import TimeSeries from "./TimeSeries";
import { range, select } from "d3";

function Tooltip(props) {
    const {d, data, left, top, height, width} = props;
        //console.log(d);
    if (d === null)  {
        return <g></g>;
    } else {
        console.log(d);
        console.log(data);

        if (data.length > 0){

        for (let i = 0; i < 16; i++) {
             if (d === data[i].neighbourhood){
                const divStyle = {
                    position: "absolute",
                    textAlign: "center",
                    width: "300px",
                    height: "160px",
                    padding: "2px",
                    font: "12px sans-serif",
                    background: "floralwhite",
                    border: "2px",
                    borderRadius: "8px",
                    pointerEvents: "none",
                    left: `${left+580}px`,
                    top: `${top-500}px`
                };


                return <div style={divStyle} >
                    <p>{}</p>
                <p>Aggregate statistics for the {data[i].neighbourhood}</p>
                <ul> 
                {/* <li>End in: {}</li> */}
                <li>Average listing price: {data[i].Average}</li>
                <li>Maximum price: {data[i].maximum}</li>
                <li>Minimum price: {data[i].minimum}</li>
                <li>Number of entire homes/aptm: {data[i].Entire}</li>
                <li>Number of private rooms: {data[i].Private}</li>
                <li>Number of shared rooms: {data[i].Shared}</li>
                <li>Average number of reviews/month: {data[i].reviews}</li>
                </ul>
                </div>
                }
                
          }
        };
        return <g></g>;
    }
};

export default Tooltip;