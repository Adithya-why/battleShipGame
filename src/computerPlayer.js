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

    let p = true;

    //if coorinates attacked already, then new cooridnates are generated
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
    

    //then the given location is attacked
    //enemyGameBoard.receiveHit(x,y);
    //attacked location is kept track of
    attacked.push([x,y]);
    return [x,y];

    
}
    
return {attack};
}


export{computerPlayer};