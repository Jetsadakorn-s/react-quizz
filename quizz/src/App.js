import { createContext,useState } from "react";
import Menu from "./component/Menu";
import Quizz from "./component/Quizz";
import Score from "./component/Score";
import './App.css'

export const DataContext=createContext()

function App() {
  const [appState,setAppState]=useState("menu")
  const [score,setScore]=useState(0)
  return (
    <DataContext.Provider value={{appState,setAppState,score,setScore}}>
      <div className="App">
        <h1>Web development quizz</h1>
        {appState==="menu"&&<Menu/>}
        {appState==="quizz"&&<Quizz/>}
        {appState==="score"&&<Score/>}
      </div>
    </DataContext.Provider>
  );
}

export default App;
