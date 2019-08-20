const convert = require('../convert')
const assert = require('assert')

describe('temperature converstion', function(){
    describe('CtoF', function(){
         it('should convert -40 celsius to -40 f', function(){
             assert.equal(-40, convert.cToF(-40))
         })
         it('should convert 0 celsius to 32 f', function(){
             assert.equal(32, convert.cToF(0))
         })
    })

    describe('fToC' , function(){
        it('should convert -40 farenheit to -40 celsius',function(){
            assert.equal(-40, convert.fToC(-40))
        })
        it('should convert 32 farenheit to 0 celsius', function(){
            assert.equal(0, convert.fToC(32))
        })
        it('should return undefined if it not a number', function(){
            assert.equal(undefined, convert.fToC('a'))
        })
    })
   
})