const symptoms = require('../assets/symptoms.json');
const conditions = require('../assets/conditions.json');

let sample = {
    "Name": "John Williams",
    "Age": 43,
    "Weight": 86,
    "Height": 1.65,
    "Symptoms": ["Chest Pain", "Nausea", "Short Breath", "Confusion", "Pale"]
}

let symp = symptoms.Symptoms;

function parseInput(input) {
    for (let i = 0; i < input.Symptoms.length; i++) {
        for (let j = 0; j < symp.length; j++) {
            if (input.Symptoms[i] == symp) {
                console.log("the symptom is", input.Symptoms[i], " which may lead to the conditions ");
            }
        }
    }

    // console.log(input);
    // console.log(input.Symptoms[1]); // already an array, now compare with symptoms jsons
    console.log(Object.values(symp)[0]);
    console.log(symp[0]);
    // console.log(JSON.parse("Aches: ['Bronchitis', 'Cancer','Common Cold', 'COVID-19', 'Flu', 'Heart Attack', 'Kidney Failure']"));
}


// console.log(JSON.stringify({Name: 'bread', Age: 200}));

parseInput(sample);