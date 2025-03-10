let num = "";
for(let i = 5; i > 0; i--){
  num = "";
  for(let j = 5; j >= i; j--){
    num = num + i;
  }
  console.log(num);
}