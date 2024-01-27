import {describe, expect, test} from '@jest/globals';
import reversestring from './Reversestring';
test("base test", ()=>{
    expect(reversestring('arara')).toBe('arara')
})

test("Example 2", ()=>{
    expect(reversestring('hello world')).toBe('dlrow olleh')
})

test("Example 3", ()=>{
    expect(reversestring('2009')).toBe('9002')
})

test("Example 4", ()=>{
    expect(reversestring('FLAMENGO')).toBe('OGNEMALF')
})

test("Example 5", ()=>{
    expect(reversestring('')).toBe('')
})

