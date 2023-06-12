import { ship } from "./ship.js";
import { gameBoard } from "./gameBoard.js";

//same as player,but the coorindtaes to attack are generated ranbdomly

const computerPlayer = function(enemyGameBoard){
    let attacked = [];
    const attack = function(){

    let pre = false;

    //selects random coordinates
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    //attacked.push([x,y]);
    let p = true;

    //if coorinates attacked already, then new cooridnates are generated
    while(p===true){
    p = false;
    for(let i = 0;i<attacked.length;i++){
        if(attacked[i][0]===x && attacked[i][1]===y){
            p = true;
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        }
    }
}
    

    //then the given location is attacked
    //enemyGameBoard.receiveHit(x,y);
    //attacked location is kept track of
    attacked.push([x,y]);
    return [x,y];

    
}
    
return {attack};
}


export{computerPlayer};