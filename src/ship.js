const ship = function(lent=0,hit=0,sunkk=false,or="row"){
    let length = lent;
    let hits = hit;
    let sunk = sunkk;
    let ori = or;
    //creates a ship object

    const isHit = function(){
        hits = hits + 1;
        return hits;
    }

    
    
    const isSunk  = function(){
        if(hits>=length){
            sunk = true;
            return sunk;
        }

        else{
            sunk = false;
            return sunk;
        }
    }


    return {length,isSunk,isHit,ori}



}




export{ship};