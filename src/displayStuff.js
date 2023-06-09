const displayBoard = function(gboard,cname){
    let board = gboard.getBoard();
    console.log(gboard);
    
    let boardDiv = document.querySelector(`.board.${cname}`);
    for(let i = 0;i<10;i++){
        for(let j=0;j<10;j++){
            let div = document.createElement('div');
            div.classList.add("bd");
            div.classList.add(cname);
            div.classList.add(`${i}${j}`);
            boardDiv.appendChild(div);
        }
    
    
    }

}



















export{displayBoard};