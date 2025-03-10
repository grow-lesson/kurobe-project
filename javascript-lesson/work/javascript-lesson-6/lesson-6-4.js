function findMax(numbers) {
  let max = numbers[0];{
    for(let i = 1; i < numbers.length; i++){
      if(max < numbers[i]){
        max = numbers[i];
      }
    }
    return(max);
  }
}
let maxNumbers = findMax([-1, -5, -2]);
console.log(maxNumbers);