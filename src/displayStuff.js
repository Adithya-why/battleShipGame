//this file is for DOM interaction

//function displays a given gameboard
//the cname classname is given so that the gameboards of the two players are displayed at different divs
const displayBoard = function(gboard,cname){
    //gets the board object
    let board = gboard.getBoard();
    console.log(gboard);
    //selects the div where gameboard is to be displayed
    let boardDiv = document.querySelector(`.board.${cname}`);

    //loops ina 10*10 same as keys of board object(00 to 99)
    for(let i = 0;i<10;i++){
        for(let j=0;j<10;j++){
            //creates a div for each square in the board
            let div = document.createElement('div');
            div.classList.add("bd");
            //adds the cname, which generally denotes to which player the board belongs to
            //so gb1 means board of player 1 and sop on
            div.classList.add(cname);
            //add the grid number, sames as the keys of board object
            //so a div with class 00 will coreespond to the value in board obj at obj[01]

            div.classList.add(`${i}${j}`);

            //ads an id
            div.setAttribute('id',`${cname}${i}${j}`);

            //appaende to parent div
            boardDiv.appendChild(div);
        }
    
    
    }
    //let element = document.querySelector(".bd.gb1.11");
    console.log("passed");
    
    //this section gets the ships and locations of ships
    let shipLocs = gboard.getSlocs();
    let ships = gboard.getShip();
    console.log(shipLocs);

    //tries to add a ship class to all the loactions where ships is present
    //shiplocs only has the starting grid od ship
    //so based on if it  is row or column, adjacent grids are also considered ships(based on length)
    //if ship of len 2 starts at 00 and is a row ship, the both 00 and 01 must be added to the ship class
    for(let k = 0;k<shipLocs.length;k++){
        let loc = shipLocs[k];
        let sh = ships[k];
        let ori = sh.ori;
        let l = sh.length;

        
        if(ori=="row"){
            for(let f = 0;f<l;f++){
                //let locstr = `${loc[0]}${loc[1]+f}`;
                //console.log(locstr);

                //it selects the startin square of ship and adds class ship
                //eventuallly adds to the cooridnate based on row or column to find the next square to add class ship 
                let temp = document.querySelector(`#${cname}${loc[0]}${loc[1]+f}`);
                temp.classList.add('ship');

                

            }
        }
        //if column ship
        //same procedure, but the next square is found by adding to the first coordinate
        if(ori=="column"){
            for(let f = 0;f<l;f++){
                //let locstr = `${loc[0]}${loc[1]+f}`;
                //console.log(locstr);

                //it selects the startin square of ship and adds class ship
                //eventuallly adds to the cooridnate based on row or column to find the next square to add class ship 
                let temp = document.querySelector(`#${cname}${loc[0]+f}${loc[1]}`);
                temp.classList.add('ship');

            }
        }
    }


    lis(gboard,cname);
    

}

//function to to make an attack when a box is clicked

const lis = function(gboard,cname){
    let board = gboard.getBoard();
    for(let i = 0;i<10;i++){
        for(let j = 0;j<10;j++){
            let ele = document.querySelector(`#${cname}${i}${j}`);
            ele.addEventListener('click',function(e){
                let c = (e.target.classList)[2];
                ele.classList.add('missedAttack');
                let targetSquare = board[c];
                console.log(targetSquare);
                
            })
        }
    }
    

}



















export{displayBoard};