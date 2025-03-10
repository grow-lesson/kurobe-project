function calculatePolygonAngleCount(n){
  return (n - 2) * 180 / n;
}
  let sides = calculatePolygonAngleCount(6);
  console.log(sides);