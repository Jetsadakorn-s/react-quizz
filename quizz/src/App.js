import { createContext,useState } from "react";
import Menu from "./component/menu";
import Quizz from "./component/quizz";
import Score from "./component/Score";

export const DataContext=createContext()

function App() {
  const [appState,setAppState]=useState("Menu")
  return (
    <DataContext.Provider value={{appState,setAppState}}>
      <div className="App">
        <h1>Web development quizz</h1>
        {appState==="Menu"&&<Menu/>}
        {appState==="Quizz"&&<Quizz/>}
        {appState==="Score"&&<Score/>}
      </div>
    </DataContext.Provider>
  );
}

export default App;
