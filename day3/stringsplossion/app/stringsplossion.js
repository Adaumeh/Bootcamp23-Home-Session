class StringSplosion{
  constructor(string)
  {
    this.string = string;
  }

 manipulate(){
    let str_exploded = "";
    let sss = ""
    
   let strExplode = (this.string).split("");
    for(let i=0; i<strExplode.length; i++){
        
     for(let j=0; j<=i; j++){
        str_exploded+=this.string[j];
      }
      
   }
    return str_exploded;
  }
}
  
let result = new StringSplosion('ade');
console.log(result.manipulate());


