import { useState } from "react";
import menu from "./component/menu";
import quizz from "./component/quizz";
import score from "./component/Score";

function App() {
  const [appState,setAppState]=useState("menu")
  return (
    <div className="App">
      <h1>Web development quizz</h1>
        {appState==="menu"&&<Menu/>}
        {appState==="quizz"&&<Quizz/>}
        {appState==="score"&&<Score/>}
    </div>
      


  );
}

export default App;
