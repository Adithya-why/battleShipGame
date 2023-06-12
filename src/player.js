import { ship } from "./ship.js";
import { gameBoard } from "./gameBoard.js";

//returns a player object with an attack function tHAT interacts with the gameboard of the other player

const player = function(enemyGameBoard){

    //keeps track of all the squares attacked
    let attacked = [];

    //function to attack a given square
    const attack = function(x,y){

    let pre = false;

    //no checking required
    //checks if the given location is already attacked
    /*let pre = false;
    for(let i = 0;i<attacked.length;i++){
        if(attacked[i][0]===x && attacked[i][1]===y){
            pre = true;
        }
    }*/


    //if already not attacked
    //then recive hit of enemy board is called to attack the square

    if(!pre){
    enemyGameBoard.receiveHit(x,y);
    //attacked square are kept track of
    attacked.push([x,y]);
    }
}
    
return {attack};
}


export{player};