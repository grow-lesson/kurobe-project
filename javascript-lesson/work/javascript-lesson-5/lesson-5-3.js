let products = [
  { name: "りんご", price: 120, stock: 10 },
  { name: "バナナ", price: 80, stock: 0 },
  { name: "みかん", price: 60, stock: 0 },
  { name: "ぶどう", price: 200, stock: 0 },
  { name: "いちご", price: 150, stock: 8 }
];
//1
for( let product of products){
  if(product.stock <= 5){
    console.log(product.name + product.stock);
  }
}
//2
let max = -1;
let top = "";
for(let product of products){
  if(max < product.price){
    max = product.price;
    top = product;
  }
}
console.log(top.name + top.price);
//3
let count = 0;
for( let product of products){
  if( product.stock === 0){
    count = count + 1;
    console.log("在庫切れ" + product.name );
  }
}
if(count > 0){
  console.log("在庫切れ" + count);
}