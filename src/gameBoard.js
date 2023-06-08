import {ship} from './ship.js';


const gameBoard = function(){

    let board = {};

    for(let i = 0;i<10;i++){
        for(let j=0;j<10;j++){
            board[`${i}${j}`]= "";
        }
    
    
    }

    const getBoard = function(){
        return board;
    }


    const placeShip = function(x,y,length){
        let tempShip = ship(length);
        board[`${x}${y}`] = tempShip;
        return board;
    }
 
    return {getBoard,placeShip};
}

//console.log(getBoard());
//console.log(placeShip(0,1));



export{gameBoard};