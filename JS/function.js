// 객체 
// 함수 알아보기 

/* 변수 선언 

let 변수명 ; 

*/

/* 함수 선언 

function 함수명(){
    실행된 문장;
}

//화살표 함수 : ES6 표준 함수 선언 방식 
let, const 함수명 = ()=> {
  실행된 문장
  }

*/

//함수 호출
myFunc();

//함수 정의 
function myFunc(){
  console.log("함수실행");
}


//변수에 함수 저장
// let myFunc2 = function(){
//   console.log("func2 실행");
// }


// 화살표 함수 선언하기 
let myFunc2 = () => {
  console.log("func2 실행 ");
}
myFunc2();

//홍길동님 안녕하세요, 춘향이님 안녕하세요, 개똥이님 안녕하세요 

//  text : 매개변수 

const welcome = (text) => {
  console.log(text + "님, 안녕하세요");
}

welcome("홍길동");
welcome("춘향이");

//매개변수 사용하기 
const add = (a,b) =>{
  let sum = a+b;
  console.log("두 수의 합은 : " + sum);
}

add(5,8); 
add(9,2);

//매개변수에 기본값 지정하기
const add2 = (a=5,b=7) =>{
  let sum = a+b;
  console.log("두 수의 합은 : " + sum);
}

add2(9);
add2();

//return : 값을 되돌려주는 역할, 종료 

let calc = (a, b) =>{
  let data = a*b;
  return data;
}

let result = calc(5,6);

console.log(result);

//  익명함수 : 이름이 없는, 호출없이 바로 실행되는 함수 

(()=>{
  console.log("바로 실행되는 익명함수");
})();

//콜백함수 : 인자로 함수가 사용되는 경우 
console.log("콜백함수 사용해보기 ");

const greet = (callback) => {
  console.log("안녕하세요!");
  callback();
}

greet(()=>{
  console.log("콜백함수 실행..!!");
})

//10초 후 실행되는 함수 작성해보기 

setTimeout(()=>{
  console.log("5초 뒤에 실행됩니다.");
}, 5000);