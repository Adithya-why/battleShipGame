import {ship} from './ship.js';
import {gameBoard} from './gameBoard.js';
import {player} from './player.js'; 
import {computerPlayer} from './computerPlayer.js';
import css from './styles/main.css';
import { displayBoard } from './displayStuff.js';

//this file handles game loops
//creates player and gamboards
//and handles interaction between them
console.log("imports sucess");

const game = function(){
    const gb1 = gameBoard();
    const gb2 = gameBoard();

    const player1 = player();
    const player2 =  computerPlayer();

    gb1.placeShip(1,1,2,"row");
    gb1.placeShip(2,3,4,"row");
    gb2.placeShip(3,1,5,"column");
    
    //gb1.placeShip(7,3,4);
    //gb1.placeShip(0,4,7);
    console.log(gb1.getBoard());
    displayBoard(gb1,"gb1");
    displayBoard(gb2,"gb2");
    

}

game();
console.log("Finished");