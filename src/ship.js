const ship = function(lent=0,hit=0,sunkk=false){
    let length = lent;
    let hits = hit;
    let sunk = sunkk;


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


    return {length,isSunk,isHit}



}




export{ship};