module.exports = {
reverseString: function(str) {
   if(str===null || str.length===0){
        
        return null;
    }else{
      var splitstr = str.split("");
      var Arrayreverse = splitstr.reverse();
      var result = Arrayreverse.join("");
      if(result === str){
        return true;
        
      }else{
      return result;
      }
    }
} 
}