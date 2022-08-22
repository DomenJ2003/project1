import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

function App() {

  const [isModalVisible, setModalVisible] = useState(false); 
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Navbar openAddTodoModal={()=>setModalVisible(true)} />
      <div className="main-container">
        <HomePage {...{isModalVisible, setModalVisible, todos, setTodos}} />
      </div>
    </div>
  );
}

export default App;
