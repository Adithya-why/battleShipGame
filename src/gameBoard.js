import {ship} from './ship.js';
//this modules exports a function that creates a gameboard and places ships in it.


const gameBoard = function(){
    //contains a key for every square in a 10*10 board, the value is the ship object if it exists
    let board = {};

    //keeps track of coordinates of missed attacks(empty squares) so they are not hit again
    let missed = [];

    //keeps track of number os such misses
    let nMissed = 0;

    //keeps track of all the ships placed oin board
    let ships = [];

    //keeps track of locations of all ships placed
    let slocs = [];


    //populates the board objects with keys from 00 to 99 with empty values for now
    for(let i = 0;i<10;i++){
        for(let j=0;j<10;j++){
            board[`${i}${j}`]= "";
        }
    
    
    }

    //function to return the board object
    const getBoard = function(){
        return board;
    }

    

    //function to place a ship
    //creates a ship with given length and orinetation
    //inserts that ship to the given location
    const placeShip = function(x,y,length,or="row"){
        let tempShip = ship(length,0,false,'row');

        //inserts to board
        board[`${x}${y}`] = tempShip;

        //keeps tracks of the ship and location
        ships.push(board[`${x}${y}`]);
        slocs.push([x,y]);
        //returns the updated board
        return board;
    }

    //return locations of all ships
    const getSlocs = function(){
        return slocs;
    }
 

    //function that takes a coordinated and hits the ship if a ship is present at the given location
    //also keeps track of missed shots if there is no ship
    const receiveHit = function(x,y){
        //gets the element at the given coordinate from board
        let possibleShip = getBoard()[`${x}${y}`];

        //if there is a ship, its number of hits is increased
       if(possibleShip){
        possibleShip.isHit();

       }
       //if no ship,misses increased and missed location is recorded
       else{
        missed.push([x,y]);
        nMissed += 1;
       }

    }

    //returns all teh present ships
    const getShip = function(){
        return ships;
    }

    //returns number of misses
    const getMisses = function(){
        return nMissed;
    }

    //checks if all the ships in the gameboard are sunk
    const allSunk = function(){
        let alSunk = false;
        let count = 0;
        //checks the issunk property of all ships in board
        for(let i=0;i<ships.length;i++){
            if(ships[i].isSunk()){
                count+=1;
            }
        }
        //if all ships in voard return false, then alsunk = true
        if(count === ships.length){
            alSunk=true;
        }


        //returns if all ships are sunk
        return alSunk;
    }
    return {getBoard,placeShip,receiveHit,allSunk,getShip,getSlocs};
}




export{gameBoard};