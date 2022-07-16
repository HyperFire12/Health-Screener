import symptoms from "./assets/justSymptoms.json";
import testcase from "./assets/testcase.json";
import findCond from "./assets/symptoms.json";

export default function heatmap() {
    let condArr = []; // push conditions into here from patent's symptoms
    let patientSympArray = testcase.Symptoms; // input
    let allSympArray = symptoms.Symptoms; // array of symptoms

    for (let i = 0; i < patientSympArray.length; i++) {
        for (let j = 0; j < allSympArray.length; j++) {
            if (patientSympArray[i] === allSympArray[j]){ // if patient's symptom is found in the array of symtoms, push the symptoms w/conditions
                condArr.push(findCond.Symptoms[j]); // push the symp+cond to condArr
                console.log("pushed to condarr:", condArr[i]);
            }
        }
    }
    // console.log(patientSympArray[0])
    // console.log(allSympArray.length); 

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

    if (potentialCond.length == 1) {
        console.log("only one possible condition");
        obj = {
            "Name": testcase.Name,
            "Condition": potentialCond[0],
            "Sector": "sector goes here",
            "Affected Area": ""
        }
    }
    else {
        console.log("many possible conditions");
        obj = {
            "Name": testcase.Name,
            "Potential Conditions": potentialCond,
            "Sector": "sector goes here",
            "Affected Area": ""
        }
    }

    console.log(obj);

}