import React from "react";
import { initializeApp } from "firebase/app";
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

return (
    <div className="App" style={{padding:"20px"}}>
      <Banner />
      <MainPage />
    </div>
  );
}

export default App;
