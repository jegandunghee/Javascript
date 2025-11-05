// while 조건문 

// 숫자 배열의 data 갯수만큼 반복해서 읽어오기
// 합계를 구하는데, 읽어온 값이 -1이면 건너뛰기 

let data = [5, -1, 8, -1, 2, -1, 9 ];
let n = 0; 
let total = 0; 
while( n < data.length){
  if(data[n] <0){
    n++;
    continue;
  }
  total += data[n];
  n++;
}
console.log(`tatal = ${total}`);


// 위의 while문을 for of문으로 작성해보기 
let data2 = [5, -1, 8, -1, 2, -1, 9 ];

let tatal2 = 0; 

for(let n of data2){
  if(n < 0){
    continue;
  }
  total += n;
}

console.log(`total2 = ${total}`);