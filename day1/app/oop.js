module.exports = {
var food = function(name,form,storage,group,cook){
  this.name =   name;
  this.form =    form;
  this.storage = storage;
  this. group =  group;
  this.cook =   cook;
};


var cook = function(){
  console.log("Hello, I am"  + this.name +  "cooked by" + this.cook);
};
var eat = function(){
  console.log("You eat me as"+ this.solid);
};
var storage = function(){
    console.log("You store me in the" + this. storage);
};

var food1 = new food("cake","solid","refrigerate","Carboydrates","baking");
var food2 = new food("tea","liquid","canning","Carboydrates","boiling" );
var food3 = new food("meat", "solid","drying", "protein","roasting");
var food4 = new food("apple","Solid","refrigerating","vitamins","blending");

food1.cook;
food2.storage;
food3.form;
food2.group;
};
