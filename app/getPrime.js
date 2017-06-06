
module.exports = {
getPrime:function(n){
var ar = [],
    limit = 10,
    n, divisor;
 if(typeof n === Array){
    return [];
}else if(n< 0){
    return 'Invalid input'

}else if(n===0){
    return []
}
 else if(typeof n === String) {
  return [];
}else{   

     for (var counter = 0; counter <= n; counter++) {
            var notPrime = false;
            for (var i = 2; i <= ar.length && !notPrime; i++) {
                if (counter%ar[i]===0) {
                    notPrime = true;
                }
            }
            if (notPrime === false) ar.push(counter);
        }
        return ar
    }
    }

}