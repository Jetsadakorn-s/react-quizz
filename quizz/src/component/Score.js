import { useContext, useState } from "react";
import { DataContext } from "../App";

const Score=()=>{
    const {score}=useContext(DataContext)
    return(
    <div className="score">
        <h1>สรุปผลคะแนน</h1>
        <h2>{score}</h2>
    </div>
)   
}
export default Score;