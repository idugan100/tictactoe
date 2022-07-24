const gameBoard=(()=>{
    const board=["x","o","x","o","x","o","x","o","x"];
    const renderBoard=()=>{
        const htmlboard=document.querySelectorAll('.location')
        for(let i=0;i<9;i++){
        htmlboard[i].innerHTML=board[i];
    }

    }
    const checkWinner=()=>console.log("checking...");
    const reset=()=>console.log("resetting...")
    return{
        renderBoard,checkWinner,reset
    };

}

)();

gameBoard.renderBoard()