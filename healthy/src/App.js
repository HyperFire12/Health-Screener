// import "./App.css";
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import TextField from "@mui/material/TextField";
import HumanHeat from "./components/human";
import MainPage from "./components/input";
import Banner from "./components/banner";
import heatmap from './heatmap';

function App() {

  heatmap();
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

  return (
    <div className="App" style={{padding:"20px"}}>
      <Banner />
      {/* <TextField
        value={symptoms}
        onChange={(value) => setSymptoms(value)}
        sx={{ position: "absolute", left: 10, top: 10 }}
        label="Data"
        variant="standard"
      /> */}
      <MainPage />
      <HumanHeat heat={[0]} />
    </div>
  );
}

export default App;
