import { useState } from "react";
import Square from "./Square";
function Board(){
    const [squares,setSquares]=useState(Array(9).fill(null));
    const[xIsNext,setXIsNext]=useState(true);

    function handleClick(i){
        const newSquares=squares.slice();
        if(newSquares[i]) return;
        if(xIsNext)
            newSquares[i]="X";
        
        else
            newSquares[i]="O";
        setXIsNext(!xIsNext);
        setSquares(newSquares);
    }

    return(
        <>
        <div data-testid="board">
                <div className="board-row">
                    <Square value={squares[0]} handleClick={()=>handleClick(0)}/>
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

                
            </div>
        </>
    )
}

export default Board;