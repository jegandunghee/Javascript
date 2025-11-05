// 조건문 for문 

// 1~10 사이의 짝수만 출력하기 
for(let i = 2; i < 11 ; i+=2 ){
  console.log(i + "는 짝수입니다.");
}

for(let i=1; i<11; i++){
  if(i%2 === 0){
    console.log(i+"는 짝수입니다람쥐");
  }
}

// // 카운트 : 5, 4, 3, 2, 1 출력하기 
// for(let i=5 ; i<=1; i--){
//   console.log("카운트 : " + i);
// }

//1~10 까지 합 구하기 
let sum = 0; 
for(let i=0; i < 11;i++ ){
  sum +=i ; 
}
console.log(`1~10까지의 합은 : ${sum} 입니다.`);


// 구구단 중 3단 출려해보기 
let j =3;
for(let i=1; i<10; i++ ){
  console.log(`${j} * ${i} = ${j*i}`);
}

// 구구단 전체 출력하기
for(let i = 2; i<10; i++){
  console.log(`--- ${i}단 ---`);
  for(let h = 1; h<10; h++){
    console.log(`${i} * ${h} = ${i*h}`);
  }
}