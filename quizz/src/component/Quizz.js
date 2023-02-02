import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData";

const Quizz=()=>{
    const [current,setCurrent]=useState(0)
    const [selectchoice,setSelectChoice]=useState("")
    const {score,setScore,setAppState}=useContext(DataContext)

    useEffect(()=>{
        checkAnswer()
    },[selectchoice])

    const checkAnswer=()=>{
        if(selectchoice!==""){
            if(selectchoice===QuestionsData[current].answer){
                setScore(score+1)
                nextquestion()
            }else{
                nextquestion()
            }
        }
    }

    const nextquestion=()=>{
        setSelectChoice("")
        if(current===QuestionsData.length-1){
            setAppState("score")
        }
        setCurrent(current+1)
    }

    return(
    <div className="quizz">
        <h1>{QuestionsData[current].question}</h1>
        <div className="choices">
            <button onClick={()=>setSelectChoice("A")}>{QuestionsData[current].A}</button>
            <button onClick={()=>setSelectChoice("B")}>{QuestionsData[current].B}</button>
            <button onClick={()=>setSelectChoice("C")}>{QuestionsData[current].C}</button>
            <button onClick={()=>setSelectChoice("D")}>{QuestionsData[current].D}</button>
        </div>    
        <p>{`${current+1} / ${QuestionsData.length}`}</p>    
    </div>
)   
}
export default Quizz;