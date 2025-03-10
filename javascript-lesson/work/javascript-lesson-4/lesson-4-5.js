let arr = [5, 10, 15, 20, 25]; 
let count = 0;
for(let i = 0; i < arr.length; i++) {
  if(arr[i] % 3 == 0){
    count = count + 1;
  }
}
console.log(count);