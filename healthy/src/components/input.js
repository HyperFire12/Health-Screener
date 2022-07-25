import {React, useState} from 'react';

import symptoms from "../assets/justSymptoms.json";
import conditions from "../assets/justConditions.json";
import findCond from "../assets/symptoms.json";
import findSector from "../assets/conditions.json";

const MainPage = () => {
    const [something, setSymptoms] = useState('');

    const changeBoth = event => {
        Chris(event);
    }

    const changeSymptoms = event => {
        setSymptoms(event.target.value);

        console.log("the symptom is", event.target.value);
    }

    let asdf = {};

    const Chris = event => {
        changeSymptoms(event);
        changeOutput(event);
        let condArr = []; // push conditions into here from patent's symptoms
        let patientSympArray = something.Symptoms; // input
        let allSympArray = symptoms.Symptoms; // array of symptoms
        let allCondArray = conditions.Conditions; // array of conditions
    
        for (let i = 0; i < patientSympArray.length; i++) {
            for (let j = 0; j < allSympArray.length; j++) {
                if (patientSympArray[i] === allSympArray[j]){ // if patient's symptom is found in the array of symtoms, push the symptoms w/conditions
                    condArr.push(findCond.Symptoms[j]); // push the symp+cond to condArr
                    console.log("pushed to condarr:", condArr[i]);
                }
            }
        }
        const conditionMap = new Map();
    
        for(let i = 0; i < patientSympArray.length; i++){ // loop through patient's symptoms
            console.log("Symptom:", patientSympArray[i]);
            for(let j = 0; j < condArr[i][patientSympArray[i]].length; j++){ // looping
                conditionMap.set(condArr[i][patientSympArray[i]][j], conditionMap.get(condArr[i][patientSympArray[i]][j]) + 1 || 1);
                console.log("Possible condition:", condArr[i][patientSympArray[i]][j]);
            }
        }
        console.log(conditionMap);
        let max = Math.max(...conditionMap.values());
        console.log("highest value is", max);
    
        let potentialCond = [];
    
        for(let [key, value] of conditionMap.entries()) {
            if (value === max) {
                console.log("It seems as though you may have", key);
                potentialCond.push(key);
            }
        }
    
        let obj = {};
        let sector = "";
    
        if (potentialCond.length === 1) {
            console.log("only one possible condition");
            for (let i = 0; i < allCondArray.length; i++) {
                if (potentialCond[0] === allCondArray[i]){ // if patient's symptom is found in the array of symtoms, push the symptoms w/conditions
                    sector = findSector.Conditions[i].sector;
                }
            }
            obj = {
                "Name": something.Name,
                "Condition": potentialCond[0],
                "Sector": sector,
                "Affected Area": ""
            }
        }
        else {
            console.log("many possible conditions");
            let severe = 0;
            let condition = "";
            let location = "";
            for (let i = 0; i < potentialCond.length; i++) { // going through what conditions you MIGHT have
                for(let j = 0; j < allCondArray.length; j++){ // searching through ALL existing conditions
                    if (potentialCond[i] === allCondArray[j]){ // if there is a match
                        if(severe < parseInt(findSector.Conditions[j][potentialCond[i]].severity)){
                            sector = findSector.Conditions[j][potentialCond[i]].sector;
                            severe = findSector.Conditions[j][potentialCond[i]].severity;
                            location = findSector.Conditions[j][potentialCond[i]].location;
                            condition = allCondArray[j];
                        }
                    }
                }
            }
            obj = {
                "Name": something.Name,
                "Potential Conditions": condition,
                "Sector": sector,
                "Affected Area": location
            }
        }
    
        console.log(obj);
        asdf = obj;
    }

    const [output, setOutput] = useState('');

    const changeOutput = event => {
        console.log("from the output function, we get this:", event.target.value);
        setOutput(asdf);
    }

    return (
      <div className="App" style={{display:"flex", padding:"10px"}}>
        <div style={{display:"flex", flexDirection:"column", fontFamily:"monospace", fontSize:"20px"}}>
            <label style={{margin:"5px"}}>Input</label>
            <textarea // when this textbox receives the input, it will update input box AND output box
            value={something}
            onChange={changeBoth}
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
      </div>
    );
}
export default MainPage