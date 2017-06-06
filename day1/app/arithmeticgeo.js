'use strict'
module.exports = {
aritGeo:function(array){
// var array;
if(array.length === 0){
 	return 0;
}else{
 for(var i = 0; i <= array.length; i++){
  if(array[1]-array[0] === array[2] - array[1] &&array[3]-array[2] === array[4]-array[3]){
   return 'Arithmetic';
 }else if(array[1]/array[0] === array[3]/array[2]){
   return 'Geometric';
 }else{
   return -1;

 }
 }
} 
}
}