import {ship} from "../src/ship.js";


test('returns length',()=>{
    expect(ship(2).length).toBe(2);
})



test('hit func works',()=>{
    let x = ship(2);
    x.isHit();

    expect(x.isHit()).toBe(2);
})