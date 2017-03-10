'use strict'

module.exports = {

 /* Find the average of three integers */
 computeAverage: function(num1, num2, num3) {
 	if(typeof num1 !== "number" || typeof num2 !== "number"|| typeof num3 !== "number"){
 		return false;
 	}
 	if(num1 === "" || num2 === "" || num3 === ""){
 		return false;
 	}
 	
   var average = (num1 + num2 + num3)/3;
   return average;
 },
 
 /* Find the factorial of an integer */
 computeFactorial: function(num) {
 	if(typeof num !== "number" || num === ""){
 		return false;
 	}
   return (num === 0) ? 1 : num * this.computeFactorial(num - 1);
   
 },

 /* Convert a given Celcius temperature to Fahrenheit */
 convertTempCtoF: function(cTemp) {
 	if(typeof cTemp != "number" || cTemp < 1){
 		return false;
 	}
   var fTemp = (cTemp * 9/5) + 32;
   return fTemp;
 },

 /* Convert a given Fahrenheit temperature to Celcius */
 convertTempFtoC: function(fTemp) {
 	if(typeof fTemp != "number"){
 		return false;
 	}
   var cTemp = (fTemp  -  32)  *  5/9;
   return cTemp;
 }

}
