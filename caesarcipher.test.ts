import {describe, expect, test} from '@jest/globals';
import { CaesarCipher, getCaesarChar } from './caesarcipher';

test("base test", ()=>{
    expect(getCaesarChar('a')).toBe('n')
})

test("example 2", ()=>{
    expect(getCaesarChar('A')).toBe('N')
})

test("example 3", ()=>{
    expect(getCaesarChar('N')).toBe('A')
})
test("example 4", ()=>{
    expect(getCaesarChar('O')).toBe('B')
})


test("example 5", ()=>{
    expect(CaesarCipher('Olá Mundo !')).toBe('Byá Zhaqb !')
})

test("example 6", ()=>{
    expect(CaesarCipher('CESAR')).toBe('PRFNE')
})

test("example 7", ()=>{
    expect(CaesarCipher('THE ODIN PROJECT')).toBe('GUR BQVA CEBWRPG')
})

