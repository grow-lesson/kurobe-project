let students = [
  { name: "田中", score: 85 },
  { name: "山田", score: 92 },
  { name: "佐藤", score: 78 },
  { name: "鈴木", score: 60 },
  { name: "高橋", score: 95 }
];
//1
for (let student of students){
  if(student.score >= 80){
    console.log(student.name + student.score);
  }
}
//2
for (let student of students){
  if(student.score < 70){
    console.log(student.name + student.score);
  }
}
//3
let max = -1;
let top = "";
for (let student of students){
  
  if(student.score > max){
    max = student.score;
    top = student;
  }
}
console.log(top.name + top.score);