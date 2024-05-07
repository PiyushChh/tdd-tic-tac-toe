function Square({value,handleClick}){
    return(
        <>
        <button className="square" onClick={handleClick} data-testid="square"
        >
        {value}
        </button>
        </>
    )
}

export default Square;