// testing code goes here

'use strict';

const expect = require('chai').expect;
const myApp = require('../app/library.js');

describe("Arithmetic Functionality", function() {
  it("should return 2 as average for 1, 2, 3", function() {
    expect(myApp.computeAverage(1, 2, 3)).to.equal(2);
  })
  it("should return 5 as average for 3, 7, 5", function() {
    expect(myApp.computeAverage(3, 7, 5)).to.equal(5);

  })
  it("should return 120 as factorial for 5", function() {
    expect(myApp.computeFactorial(5)).to.equal(120);
  })
})

describe("Temperature Conversion Functionality", function() {
  it("should return 104 for Celcius value 40", function() {
    expect(myApp.convertTempCtoF(40)).to.equal(104);
  })
  it("should return 140 for Celcius value 60", function() {
    expect(myApp.convertTempCtoF(60)).to.equal(140);
  })
  it("should return 60 for Fahrenheit value 140", function() {
     expect(myApp.convertTempFtoC(140)).to.equal(60);

  })
  it("should return 40 for Fahrenheit value 104", function() {
     expect(myApp.convertTempFtoC(104)).to.equal(40);
  })

   it("should return 25 for Fahrenheit value 77", function() {
     expect(myApp.convertTempFtoC(77)).to.equal(25);
  })
   
})
