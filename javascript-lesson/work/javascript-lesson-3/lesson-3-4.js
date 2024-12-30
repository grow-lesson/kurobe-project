let numbers = [18, 25, 12, 9, 30];
if(numbers[0] < numbers[1] && numbers[0] < numbers[2] && numbers[0] < numbers[3] && numbers[0] < numbers[4]){
  console.log(numbers[0]);
}else if(numbers[1] < numbers[0] && numbers[1] < numbers[2] && numbers[1] < numbers[3] && numbers[1] < numbers[4]){
  console.log(numbers[1]);
}else if(numbers[2] < numbers[0] && numbers[2] < numbers[1] && numbers[2] < numbers[3] && numbers[2] < numbers[4]){
  console.log(numbers[2]);
}else if(numbers[3] < numbers[0] && numbers[3] < numbers[1] && numbers[3] < numbers[2] && numbers[3] < numbers[4]){
  console.log(numbers[3]);
}else {
  console.log(numbers[4]);
}