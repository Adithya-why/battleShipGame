import { gameBoard } from "../src/gameBoard.js";
let board = {};

    for(let i = 0;i<10;i++){
        for(let j=0;j<10;j++){
            board[`${i}${j}`]= "";
        }
    }



test('returns a board of coordinates', ()=>{
    expect(gameBoard().getBoard()).toBe(board);
})


test('returns board obj',()=>{
    expect(Object.keys(gameBoard().getBoard())).toContain("10");
})


test('places ship',()=>{
    expect(gameBoard().placeShip(0,0,2)['00'].length).toBe(2);
})

