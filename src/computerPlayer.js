import { ship } from "./ship.js";
import { gameBoard } from "./gameBoard.js";



const computerPlayer = function(enemyGameBoard){
    let attacked = [];
    const attack = function(){

    let pre = false;
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);

    let p = true;
    while(p===true){
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    p = false;
    for(let i = 0;i<attacked.length;i++){
        if(attacked[i][0]===x && attacked[i][1]===y){
            p = true;
        }
    }
}
    

    
    enemyGameBoard.receiveHit(x,y);
    attacked.push([x,y]);
    
}
    
return {attack};
}


export{computerPlayer};