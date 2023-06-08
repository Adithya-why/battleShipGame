import {ship} from './ship.js';


const gameBoard = function(){

    let board = {};
    let missed = [];
    let nMissed = 0;
    let ships = [];

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
        ships.push(board[`${x}${y}`]);
        return board;
    }
 


    const receiveHit = function(x,y){
        let possibleShip = getBoard()[`${x}${y}`];
       if(possibleShip){
        possibleShip.isHit();

       }

       else{
        missed.push([x,y]);
        nMissed += 1;
       }

    }


    const getMisses = function(){
        return nMissed;
    }


    const allSunk = function(){
        let alSunk = false;
        let count = 0;
        for(let i=0;i<ships.length;i++){
            if(ships[i].isSunk()){
                count+=1;
            }
        }

        if(count === ships.length){
            alSunk=true;
        }

        return alSunk;
    }
    return {getBoard,placeShip,receiveHit,allSunk};
}




export{gameBoard};