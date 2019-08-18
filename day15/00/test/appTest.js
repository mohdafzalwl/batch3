//import assert method from chai - assertion library
const assert = require('chai').assert
const sayHello = require('../app').sayHello
const addNumbers = require('../app').addNumbers
//it - single unit test case 
sayHelloResult = sayHello()
addNumbersResult =addNumbers(5,5)
describe('App for testing sayhello', function(){
    it(' sayHello fn should return hello', function(){
        //   let result = sayHello()
        assert.equal(sayHelloResult,'hello')
    })
//if the result is string 
    it('say hello should be string', function(){
        // let result = sayHello()
        assert.typeOf(sayHelloResult, 'string')
})
})
describe('Add Numbers gruop', function(){
    
    it('addNumbers should be above 5', function(){
        // let result = addNumbers(5,5)
        assert.isAbove(addNumbersResult,5)
    })
    it('add Numbers should be numbers',function(){
        // let result = addNumbers(5,5)
        assert.typeOf(addNumbersResult, 'number')
    })
  })

   


