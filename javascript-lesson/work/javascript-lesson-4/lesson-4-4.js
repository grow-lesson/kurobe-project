let arr = [10, 20, 30, 40, 50];
let max = arr[0];
for(let i = 1; i < arr.length; i++ ) {
  if(max < arr[i]){ // max=10→20→30→40 arr[1→2→3→4]=20→30→40→50 true→true→true→true
    max = arr[i];    // max=20→30→40→50
  }
}
console.log(max);
