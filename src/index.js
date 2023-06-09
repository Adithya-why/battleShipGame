import {ship} from './ship.js';
import {gameBoard} from './gameBoard.js';
import {player} from './player.js'; 
import {computerPlayer} from './computerPlayer.js';


console.log("imports sucess");

const game = function(){
    const gb1 = gameBoard();
    const gb2 = gameBoard();

    const player1 = player();
    const player2 =  computerPlayer();


    console.log(gb1.getBoard());
    console.log(gb1.placeShip(0,1,2));
    console.log(gb1.allSunk());
    gb1.receiveHit(0,1);
    console.log(gb1.allSunk());
    

}

game();
console.log("Finished");