import {describe, expect, test} from '@jest/globals';
import calculator from './calculator';

test("add tests 1", ()=>{
    expect(calculator().add(2, 3)).toBe(5)
})

test("add tests 2", ()=>{
    expect(calculator().add(-2, 3)).toBe(1)

})

test("add tests 3", ()=>{
    expect(calculator().add(200, 32)).toBe(232)
})

test("add tests 4", ()=>{
    expect(calculator().add(-70, 3)).toBe(-67)

})

test("subtract tests 1", ()=>{
    expect(calculator().subtract(2, 3)).toBe(-1)
})

test("subtract tests 2", ()=>{
    expect(calculator().subtract(-2, 3)).toBe(-5)

})

test("subtract tests 3", ()=>{
    expect(calculator().subtract(200, 32)).toBe(168)
})

test("subtract tests 4", ()=>{
    expect(calculator().subtract(-70, 3)).toBe(-73)

})

test("subtract tests 1", ()=>{
    expect(calculator().multiply(2, 0)).toBe(0)
})

test("subtract tests 2", ()=>{
    expect(calculator().multiply(-2, 3)).toBe(-6)

})

test("subtract tests 3", ()=>{
    expect(calculator().multiply(2, 32)).toBe(64)
})

test("subtract tests 4", ()=>{
    expect(calculator().multiply(20, 3)).toBe(60)

})



test("subtract tests 1", ()=>{
    expect(calculator().divide(2, 2)).toBe(1)
})

test("subtract tests 2", ()=>{
    expect(calculator().divide(6, 3)).toBe(2)

})

test("subtract tests 3", ()=>{
    expect(calculator().divide(32, 2)).toBe(16)
})

test("subtract tests 4", ()=>{
    expect(calculator().divide(18, 3)).toBe(6)

})

