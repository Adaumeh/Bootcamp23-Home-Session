
var myApp = require('../app/getPrime.js');


describe("get prime tests ", function() {
  describe("Case for prime", function() {

    it("should return ''Invalid input' for  numbers < 0", function() {
      expect(myApp.getPrimes(-25)).toEqual('Invalid input');
    });
     it("should return '[]' for  numbers = 0", function() {
      expect(myApp.getPrimes(0)).toEqual([]);
    });

    it("should return []  for 'string'", function() {
      expect(myApp.getPrimes('andela')).toEqual([]);
    });
 it("should return [ 0, 1, 2, 3, 5, 7, 11, 13, 17, 19,23 ] for  25", function() {
      expect(myApp.getPrimes(25)).toEqual([ 0, 1, 2, 3, 5, 7, 11, 13, 17, 19,23 ]);
    });
 it("should return   [ 0, 1, 2, 3, 5, 7, 11, 13, 17, 19] for 20", function() {
      expect(myApp.getPrimes(20)).toEqual([0, 1, 2, 3, 5, 7, 11, 13, 17, 19]);
    });
 it("should return [ 0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ] for  50", function() {
      expect(myApp.getPrimes(50)).toEqual([ 0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]);
    });

  it("should return [ 0, 1] for  1", function() {
      expect(myApp.getPrimes(1)).toEqual([ 0, 1]);
    });
   
  it("should return [0,1,2,3,5,7,11,13] for  13", function() {
      expect(myApp.getPrimes(13)).toEqual([0,1,2,3,5,7,11,13]);
    });
   it("should return [] for  [2,3,5,6]", function() {
      expect(myApp.getPrimes([2,3,5,6])).toEqual([]);

    });

    it("should return [0,1,2,3,5,7] for  7", function() {
      expect(myApp.getPrimes(7)).toEqual([0,1,2,3,5,7]);
    });

    it("should return [0,1,2,3] for  3", function() {
      expect(myApp.getPrimes(3)).toEqual([0,1,2,3]);

    });
     it("should return [ 0, 1, 2,3, 5,7,11, 13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97] for  3", function() {
      expect(myApp.getPrimes(100)).toEqual([ 0, 1, 2,3, 5,7,11, 13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);

    });

  });
});