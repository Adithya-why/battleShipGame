import {ship} from './ship.js';
import {gameBoard} from './gameBoard.js';
import {player} from './player.js'; 
import {computerPlayer} from './computerPlayer.js';
import css from './styles/main.css';
import { displayBoard } from './displayStuff.js';


console.log("imports sucess");

const game = function(){
    const gb1 = gameBoard();
    const gb2 = gameBoard();

    const player1 = player();
    const player2 =  computerPlayer();


   // console.log(gb1.getBoard());
    displayBoard(gb1,"gb1");
    displayBoard(gb2,"gb2");
    

}

game();
console.log("Finished");