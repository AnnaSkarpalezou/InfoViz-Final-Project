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
        console.log(d)
        // console.log(data)

        // for (let i = 0; i < 16; i++) {
        //     if (d === data[i]['neighbourhood']){


            const divStyle = {
                position: "absolute",
                textAlign: "left",
                width: "150px",
                height: "120px",
                padding: "2px",
                font: "12px sans-serif",
                background: "lightgreen",
                border: "0px",
                borderRadius: "8px",
                pointerEvents: "none",
                left: `${left+10}px`,
                top: `${top}px`
            };
            return <div style={divStyle} >
                <p>{}</p>
                <p>Trip durations:</p>
                <ul> 
                {/* <li>End in: {}</li> */}
                <li>Start from: {}</li>
                </ul>
                </div>

          // }
        //}
    };
    
}



export default Tooltip;