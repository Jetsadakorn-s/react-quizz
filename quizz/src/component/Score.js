import { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData";

const Score=()=>{
    const {score,setAppState,setScore}=useContext(DataContext)
    const restartapp=()=>{
        setScore(0)
        setAppState("quizz")
    }
    return(
    <div className="score">
        <h1>สรุปผลคะแนน</h1>
        <h2>{score} / {QuestionsData.length}</h2>
        <button onClick={restartapp}>เริ่มทำแบบทดสอบอีกครั้ง</button>
    </div>
)   
}
export default Score;