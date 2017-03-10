// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var myApp = require('../app/library.js');

describe("Arithmetic Functionality", function() {
  it("should return 2 as average for 1, 2, 3", function() {
    assert(myApp.computeAverage(1,2,3) === 2);
  })
  it("should return 5 as average for 3, 7, 5", function() {
    assert(myApp.computeAverage(3, 7, 5) == 5);
  })
  it("should return 120 as factorial for 5", function() {
    assert(myApp.computeFactorial(5) === 120);
  })
  it("should validate output is a number", function() {
    assert(typeof myApp.computeFactorial(5) === "number");
  })
  it("should check if the input is a number", function() {
    assert(myApp.computeFactorial([]) === false);
  })
  it("should check if the output is greater than 1", function() {
    assert(0 > myApp.computeFactorial(5) === false);
  })
  it("should validate input type", function() {
    assert(myApp.computeFactorial("2") == false);
  })
  it("We check if the input is not a number", function() {
    assert(typeof myApp.computeFactorial(1,2,3) !== "string");
  })

  it("We check if the input is not a number", function() {
    assert.equal(false, myApp.computeFactorial());
  })
  
})


describe("Temperature Conversion Functionality", function() {
  it("should return X for Celcius value Y", function() {
    assert(myApp.convertTempCtoF(40) == 104);
  })

  it("should return X for Celcius value Y", function() {
    assert(myApp.convertTempCtoF(60) == 140);
  })
  it("should check if the input is a whole number", function() {
    assert(myApp.convertTempCtoF(60) > 1);
  })
   it("should check if the input is a whole number", function() {
    assert(myApp.convertTempCtoF(-60) == false);
  })
  it("should return Y for Fahrenheit value X", function() {
    assert(myApp.convertTempFtoC(140) == 60);
  })
  it("should validate if there is an input", function() {
    assert(myApp.convertTempFtoC() == false);
  })
  it("should return Y for Fahrenheit value X", function() {
    assert(myApp.convertTempFtoC(104) == 40);
  })
  it("should return Y for Fahrenheit value X", function() {
    expect(myApp.convertTempFtoC(140)).to.be.a("number");

  })

  it("should check if output is a number", function {
    assert(typeof myApp.convertTempFtoC(23) === "number");
  })
  

})
