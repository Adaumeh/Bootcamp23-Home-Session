'use strict';

module.exports = {

 /* Find the average of three integers */
 computeAverage: (num1, num2, num3) => {
   let average;
   // your logic goes here
  average = (num1 + num2 + num3) / 3;
   return average;
 },
 
 /* Find the factorial of an integer */
 computeFactorial: (num) => {
   let factorial = 1;
   for(var i = 1; i <= num;i++){
      factorial = factorial*i;
      
   }
   return factorial;
},

 /* Convert a given Celcius temperature to Fahrenheit */
 convertTempCtoF: (cTemp) => {
   let fTemp;
   // your logic goes here
   fTemp =  (cTemp * 9/5) + 32 ;
   return fTemp;
 },

 /* Convert a given Fahrenheit temperature to Celcius */
 convertTempFtoC: (fTemp) => {
   let cTemp;
   // your logic goes here
   cTemp = (fTemp - 32) * 5/9
   return cTemp;
 }

}
