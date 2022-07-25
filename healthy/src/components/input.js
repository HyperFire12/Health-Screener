import {React, useState} from 'react';

import heatmap from "./heatmap.js";
import convertToHeat from "./convertToHeat";
import HumanHeat from "./human.js";

const MainPage = () => {
    const [inputSymptoms, setSymptoms] = useState('');

    const changeSymptoms = event => {
        setSymptoms(event.target.value); // changes our input box

        setOutput(heatmap(event.target.value)[0]);

        setHeat(convertToHeat(heatmap(event.target.value)[1]));

        // console.log("heatmapping:", JSON.stringify(heatmap(event.target.value)[0]));
    }

    const [output, setOutput] = useState('');

    const [heat, setHeat] = useState([]);

    return (
      <div className="App" style={{display:"flex", padding:"10px"}}>
        <div style={{display:"flex", flexDirection:"column", fontFamily:"monospace", fontSize:"20px"}}>
            <label style={{margin:"5px"}}>Input</label>
            <textarea // when this textbox receives the input, it will update input box AND output box
            value={inputSymptoms}
            onChange={changeSymptoms}
            style={{width:"30vw", height:"30vw", fontSize:"15px", marginRight:"20px", padding:"10px", resize:"none"}}
            />
        </div>
        <div style={{display:"flex", flexDirection:"column", fontFamily:"monospace", fontSize:"20px"}}>
            <label style={{margin:"5px"}}>Output</label>
            <textarea
                value={output}
                disabled
                style={{width:"30vw", height:"30vw", fontSize:"15px", marginRight:"20px", padding:"10px", resize:"none"}}
                />
        </div>
        <HumanHeat heat={heat} />
      </div>
    );
}
export default MainPage