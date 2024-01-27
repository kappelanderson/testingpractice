import {describe, expect, test} from '@jest/globals';
import analyzearray from './analyzearray';

test("Analyze Array 1", ()=>{
    expect(analyzearray([1,1,1,1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 4
      })
})

test("Analyze Array 2", ()=>{
    expect(analyzearray([2,-1,10,31])).toEqual({
        average: 10.5,
        min: -1,
        max: 31,
        length: 4
      })
})
