let products = [
  { name: "シャンプー", price: 800, stock: 10 },
  { name: "コンディショナー", price: 700, stock: 8 },
  { name: "ボディーソープ", price: 400, stock: 15 },
  { name: "歯ブラシ", price: 150, stock: 20 },
  { name: "歯磨き粉", price: 300, stock: 18 },
];

//1
for (let product of products) {
  if(product.price >= 500){
    console.log(product.name);
  }
}

//2
for (let product of products) {
  if (product.stock >= 10){
    console.log(product.name + product.stock);
  }
}

//3
for (let product of products){
  if(product.price <= 300 && product.stock >= 15){
    console.log("名前:" + product.name + "  価格:" + product.price + "  在庫数:" + product.stock);
  }
}

