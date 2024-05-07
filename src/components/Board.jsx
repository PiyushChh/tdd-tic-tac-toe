import { useState } from "react";
import Square from "./Square";
function Board(){
    const [squares,setSquares]=useState(Array(9).fill(null));
    const[xIsNext,setXIsNext]=useState(true);
    let status;

    function handleClick(i){
        if(squares[i] || calculateWinner(squares)) return;
        const newSquares=squares.slice();
        
        if(xIsNext)
            newSquares[i]="X";
        
        else
            newSquares[i]="O";
        setXIsNext(!xIsNext);
        setSquares(newSquares);
    }
    function resetBoard(){
        const newSquares=Array(9).fill(null);
        setSquares(newSquares);
        setXIsNext(true);
    }
    const calculateWinner=(squares)=>{
        const lines=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let i=0;i<lines.length;i++){
            const [a,b,c]=lines[i];
            if(squares[a] && squares[a]=== squares[b] && squares[b]===squares[c]){
                return squares[a];
            }
        }
    }
    const winner=calculateWinner(squares);
    if(winner){
        status="Winner: "+winner;
    }
    else{
        status="Next player: "+(xIsNext?"X":"O");
    }
    return(
        <>
        <div data-testid="board">
           <div data-testId="status">
           <span >{status}
            </span>
           </div>
           
            <div data-testid="reset">
                
                <div className="board-row" data-testid="row1">
                    <Square value={squares[0]} handleClick={()=>handleClick(0)} />
                    <Square value={squares[1]} handleClick={()=>handleClick(1)}/>
                    <Square value={squares[2]} handleClick={()=>handleClick(2)}/>
                </div>
                
                <div className="board-row">
                    <Square value={squares[3]} handleClick={()=>handleClick(3)}/>
                    <Square value={squares[4]} handleClick={()=>handleClick(4)}/>
                    <Square value={squares[5]} handleClick={()=>handleClick(5)}/>
                </div>

                <div className="board-row">
                    <Square value={squares[6]} handleClick={()=>handleClick(6)}/>
                    <Square value={squares[7]} handleClick={()=>handleClick(7)}/>
                    <Square value={squares[8]} handleClick={()=>handleClick(8)}/>
                </div>
                <span onClick={resetBoard}>
                Reset Game
                </span>
                
                </div>
            </div>
        </>
    )
}

export default Board;