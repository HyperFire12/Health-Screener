import {React, useState} from 'react';

import heatmap from "./heatmap.js";
import convertToHeat from "./convertToHeat";
import HumanHeat from "./human.js";
import { TextField } from '@mui/material';

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
    <div style={{display:"flex", padding:"10px"}}>
      <TextField
        id="outlined-multiline-static"
        label="Input Patient Information"
        multiline fullWidth
        rows={20}
        value={inputSymptoms}
        onChange={changeSymptoms}
        style={{width:"30vw", marginRight:"5vw"}}
      />
      <TextField
        id="outlined-multiline-static"
        label="Patient Diagnosis"
        multiline fullWidth
        rows={20}
        value={output}
        InputProps={{readOnly:true}}
        style={{width:"30vw", marginRight:"5vw"}}
      />
      <HumanHeat heat={heat} />
    </div>
  );
}
export default MainPage