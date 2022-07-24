//gameboard object
const gameBoard=(()=>{
    const board=["x","o","x","o","x","o","x","o","x"];
    const renderBoard=()=>{
        const htmlboard=document.querySelectorAll('.location')
        for(let i=0;i<9;i++){
        htmlboard[i].innerHTML=board[i];
    }

    }
    const checkWinner=()=>console.log("checking...");
    const reset=()=>{
        for(let i=0;i<9;i++){
            board[i]=""
        }
    }
    const placePiece=(location,player)=>{
        board[location]=player.marker
    }
    return{
        renderBoard,checkWinner,reset,placePiece
    };

}

)();

//initial board rendering
gameBoard.renderBoard()

//reset button to clear board
document.querySelector(".reset").addEventListener('click',()=>{gameBoard.reset(); gameBoard.renderBoard();
})

