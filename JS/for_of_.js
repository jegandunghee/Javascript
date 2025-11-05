// 배열과 같이 사용되는 for문 
//  for of문 

let colors = ['red', 'green', 'blue'];

for(let i=0; i<3; i++){
  console.log(`color=${i+1} : ${colors[i]}`);
}

console.log(" ");
console.log("-------colors의 length 사용하기----------");
console.log(" ");

for(let i=0; i<colors.length; i++){
  console.log(`color의 index번호=${i+1} : ${colors[i]}`);
}

console.log(" ");
console.log("----for of문 사용해보기----");
console.log(" ");

for(let color of colors){
  console.log(`색상 : ${color}`);
}