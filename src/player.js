import { ship } from "./ship.js";
import { gameBoard } from "./gameBoard.js";



const player = function(enemyGameBoard){
    let attacked = [];
    const attack = function(x,y){
    let x = 0;
    let y = 0;
   
    let pre = false;
    for(let i = 0;i<attacked.length;i++){
        if(attacked[i][0]===x && attacked[i][1]===y){
            pre = true;
        }
    }

    if(!pre){
    enemyGameBoard.receiveHit(x,y);
    attacked.push([x,y]);
    }
}
    
return {attack};
}