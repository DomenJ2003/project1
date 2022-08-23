import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Navbar/>
      <div className="main-container">
        <HomePage {...{todos, setTodos}} />
      </div>
    </div>
  );
}

export default App;
