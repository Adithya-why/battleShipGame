import {func} from "../src/index.js";

test('basic',()=>{
    expect(func()).toMatch("hiiiii");
})