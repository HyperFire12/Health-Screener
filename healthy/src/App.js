import "./App.css";
import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import TextField from "@mui/material/TextField";
import HumanHeat from "./components/human";
import { Button } from "@mui/material";
import convertToHeat from "./components/convertToHeat";
import MainPage from "./components/input";
import Banner from "./components/banner";

function App() {


  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "wec-programming",
    storageBucket: "wec-programming.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);

  const [symptoms, setSymptoms] = useState('');
  const [heat, setHeat] = useState([]);

  useEffect(() => {
    console.log(symptoms);
  }, [symptoms]);

  // setHeat(convertToHeat('head', 3));

return (
    <div className="App" style={{padding:"20px"}}>
      <Banner />
        <TextField
        placeholder="Data"
      {/* <TextField
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        sx={{ position: "absolute", left: 10, top: 10 }}
        label="Data"
        variant="standard"
      />
      <Button
        variant="contained"
        sx={{ position: "absolute", left: 10, top: 60 }}
        onClick={() => {}}
      >
        Submit
      </Button>
      <Button
        variant="contained"
        sx={{ position: "absolute", left: 10, top: 110 }}
        onClick={() => {
          setHeat(convertToHeat("head", 3));
        }}
      >
        head
      </Button>
      <Button
        variant="contained"
        sx={{ position: "absolute", left: 10, top: 160 }}
        onClick={() => {
          setHeat(convertToHeat("neck", 3));
        }}
      >
        neck
      </Button>
      <Button
        variant="contained"
        sx={{ position: "absolute", left: 10, top: 210 }}
        onClick={() => {
          setHeat(convertToHeat("stomach", 3));
        }}
      >
        body
      </Button>
      <Button
        variant="contained"
        sx={{ position: "absolute", left: 110, top: 110 }}
        onClick={() => {
          setHeat(convertToHeat("left arm", 3));
        }}
      >
        left arm
      </Button>
      <Button
        variant="contained"
        sx={{ position: "absolute", left: 110, top: 160 }}
        onClick={() => {
          setHeat(convertToHeat("right arm", 3));
        }}
      >
        right arm
      </Button>
      <Button
        variant="contained"
        sx={{ position: "absolute", left: 110, top: 210 }}
        onClick={() => {
          setHeat(convertToHeat("left leg", 3));
        }}
      >
        left leg
      </Button>
      <Button
        variant="contained"
        sx={{ position: "absolute", left: 110, top: 260 }}
        onClick={() => {
          setHeat(convertToHeat("right leg", 3));
        }}
      >
        right leg
      </Button>
      <Button
        variant="contained"
        sx={{ position: "absolute", left: 10, top: 260 }}
        onClick={() => {
          setHeat(convertToHeat("", 3));
        }}
      >
        full
      </Button>

      <HumanHeat heat={heat} />
      <MainPage />
    </div>
  );
}

export default App;
