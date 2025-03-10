let star = "";
let space = "";
for(let i = 1; i < 6; i++){  
  star = "";
  space = "";
  for(let k = 1; k <= 5-i; k++){
    space = space + " ";
  }
  for(let j = 1; j <= i; j++){
    star = star + "*";
  }
  
console.log(space + star);
}