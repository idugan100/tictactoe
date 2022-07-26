//gameboard object
const gameBoard=(()=>{
    const board=["x","x","0","x","0","x","x","x","x"];
    const renderBoard=()=>{
        const htmlboard=document.querySelectorAll('.location')
        for(let i=0;i<9;i++){
        htmlboard[i].innerHTML=board[i];
    }

    }
    const checkWinner=()=>{
        
        if((board[0]==board[1] && board[1]==board[2] &&board[1]!="")||(board[3]==board[4] && board[5]==board[4] && board[3]!="")||
        (board[6]==board[7] && board[7]==board[8] && board[8]!="")) {
            console.log("horizontal win")
            return;
        }
    };

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
gameBoard.checkWinner();

//reset button to clear board
document.querySelector(".reset").addEventListener('click',()=>{gameBoard.reset(); gameBoard.renderBoard();
})

