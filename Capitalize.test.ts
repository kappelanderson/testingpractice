import {describe, expect, test} from '@jest/globals';
import capitalize from "./Capitalize";

test("base test", ()=>{
    expect(capitalize('hello world!')).toBe('Hello world!')
})

test("Example 2", ()=>{
    expect(capitalize('flamengo')).toBe('Flamengo')
})

test("Example 3", ()=>{
    expect(capitalize('2lasdkas')).toBe('2lasdkas')
})

test("Example 4", ()=>{
    expect(capitalize('2009')).toBe('2009')
})

test("Example 5", ()=>{
    expect(capitalize('uma vez flamengo')).not.toBe('Uma Vez Flamengo')
})