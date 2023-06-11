//this module exports a functions that creates a ship object
//it takes in the length, number of hits taken, if it is sunk and takes the orientation(row or column)
//default values used since most ships are initalized with only the length





const ship = function(lent=0,hit=0,sunkk=false,or="row"){

    //sets the main properties
    //length, number of hits taken, if it is sunk and takes the orientation(row or column)
    let length = lent;
    let hits = hit;
    let sunk = sunkk;
    let ori = or;
    //creates a ship object



    //this function increases the number of hits, is used when a ship is hit by enemy
    //also returns the number of hits
    const isHit = function(){
        hits = hits + 1;
        console.log("hitttt");
        return hits;
    }

    
    //function checks if the ship is sunk
    //it is usuaally invoked after a hit
    //if hit>=length,ship is sunk
    //that is a ship of length 2 can survive only 1 hit and is sunk after second hit
    const isSunk  = function(){
        if(hits>=length){
            //is sunk, sets the global sunk variable to true
            sunk = true;
            return sunk;
        }
        //else not sunk
        else{
            sunk = false;
            return sunk;
        }
    }

    //returns properties used outside

    return {length,isSunk,isHit,ori}



}




export{ship};