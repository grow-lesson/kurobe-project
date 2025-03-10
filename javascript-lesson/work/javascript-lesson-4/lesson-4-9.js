let num = "";
let space = "";
for(let i = 3; i >= 1; i--){
  num = "";
  space = "";
  for(let k = 0; k < 3 - i; k++){ 
    space = space + " ";        
  }
  for(let j = 1; j <= (2 * i - 1); j++){
    num = num + i;
  } 
    console.log(space + num);
}