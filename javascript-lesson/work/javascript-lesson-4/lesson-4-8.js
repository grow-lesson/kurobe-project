let num = "";
let space = "";
for(let i = 1; i < 4; i++){
num = "";
space = "";
for(let k = 1; k <= 3 - i; k++){ //1<=3-1=2〇,2<=2〇,3<=2×/1<=3-2=1〇,2<=1×/1<=0×
  space = space + " ";  //1回目スペース2こ、２回目スペース1こ,3回目スぺース0こ
}
for(let j = 1; j <= (2 * i - 1); j++){
  num = num + i;
}
console.log(space + num + space);
}