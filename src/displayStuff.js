const displayBoard = function(gboard,cname){
    let board = gboard.getBoard();
    console.log(gboard);
    
    let boardDiv = document.querySelector(`.board.${cname}`);
    for(let i = 0;i<10;i++){
        for(let j=0;j<10;j++){
            let div = document.createElement('div');
            div.classList.add("bd");
            div.classList.add(cname);
            div.classList.add(`${i}${j}`);
            boardDiv.appendChild(div);
        }
    
    
    }
    let element = document.querySelector(".bd.gb1.11");
    console.log("passed");
    

    let shipLocs = gboard.getSlocs();
    let ships = gboard.getShip();
    console.log(shipLocs);
    for(let k = 0;k<shipLocs.length;k++){
        let loc = shipLocs[k];
        let sh = ships[k];
        let ori = sh.ori;
        let l = sh.length;
        if(ori=="row"){
            for(let f = 0;f<l;f++){
                let locstr = `${loc[0]}${loc[1]+f}`;
                let temp = document.querySelector(`.bd.${cname}.${locstr}`);
                temp.classList.add('ship');

            }
        }
    }

    

}



















export{displayBoard};