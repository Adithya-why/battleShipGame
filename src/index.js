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

//function to display winner messages
const winnerMessage = function(cname){
    console.log("All ships have been sunk")
                    let winner;
                    if(cname==="gb2"){
                        console.log("Player wins")
                        winner = "Player";
                    }
                    else{
                        console.log("Computer wins");
                        winner = "Computer";
                    }

                    let main = document.querySelector(".main");
                    main.replaceChildren();
                    main.textContent = `${winner} Wins`;
}



//function for computer to placeships 

const comPlaceShips = function(gboard){
    let board = gboard.getBoard();


    //same as the mechanism to generate reandom coordinmates to attack
    //generates coordinates to place ships
    //makes sure locations used already are not generated again
    let used = [];
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    for(let j = 0;j<3;j++){
    let p = true;
    while(p===true){
        p = false;
        for(let i = 0;i<used.length;i++){
            if(used[i][0]===x && used[i][1]===y){
                p = true;
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
            }
        }
    }

    used.push([x,y]);
    }


    //then 3 ships are generated and placed on computers gameboard
    let ori = "row";
    for(let k = 0;k<3;k++){
        let r = used[k][0];
        let c = used[k][1];
        //checks if there is sufficent space for ships to fit
        if((ori=="row" && (k+k+1) <= 9-c) || (ori=="col" && (k+k+1) <=10-r)){
        gboard.placeShip(r,c,k+k+1,ori);
        //ori="column";
        }
    }

    
    
}



//function to get place ships with input from user

const getData = function(gboard){
    let btn = document.querySelector("button");
    //adds a click listener to button
    btn.addEventListener('click',function(){
        let row = parseInt(document.querySelector("#r").value);
        let col = parseInt(document.querySelector("#c").value);
        let len = parseFloat(document.querySelector("#l").value);
        let ori = document.querySelector("#o").value;

        //gets data from input fields
        console.log(row,col,len,ori);

        //places a ship made from above data
        gboard.placeShip(row,col,len,ori);


        //updates the board by
        //clearing and rendering it again
        document.querySelector(".gb1.board").replaceChildren();
        displayBoard(gboard,"gb1");
    })




}



const game = function(){

   
    let turn = "p";

    //creates boards
    const gb1 = gameBoard();
    const gb2 = gameBoard();


    const player1 = player();
    const player2 =  computerPlayer();

    //gb1.placeShip(1,1,2,"row");
    //gb1.placeShip(2,3,4,"row");

    //enable user to place ships
    getData(gb1);


    //the computer automatically places ships
    comPlaceShips(gb2);


    //displays the boards
    displayBoard(gb1,"gb1");
    displayBoard(gb2,"gb2");


    
    
    

}

game();
console.log("Finished");

export{winnerMessage};