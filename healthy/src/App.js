import './App.css';
import { initializeApp } from "firebase/app";

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
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
