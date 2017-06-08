module.exports ={
   words:function(string) {
  var re = /\w+\s/g;
  var str =  string;
  var myArray = str.match(re);
  var mycount  = 0;
  var new_array = [];

    for (var i = 0; i <= myArray.length; i++){
      y = myArray.Count(myArray[i]);
      
      if(y > 0){
        mycount += y;
        return mycount;
      }
      x = myArray.pop(myArray[i]);
      new_array.push(x);
    }return {new_array:mycount};
      
    
    }
};



	 
   
    






    


  







	
