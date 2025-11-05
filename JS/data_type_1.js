/* 자료형 - 직접참조형 */

// 실수값 계산하기 
// console.log(0.7 + 0.8);

//문자열 
let user_name = "홍길동"; 
console.log(`안녕하세요 ${user_name}님`);

//boolean 
let data;
console.log(data); //undifined : 선언할 때 값 지정 안했을 경우(값이 없음)

user_name = null;
console.log(user_name); //null : 의도적으로 값이 없음을 명시할 때 null을 지정함. 

/* 자료형 - 간접참고형(데이터가 여러개일 경우) */

let color = ['red', 'green', 'blue'];

// 배열에 들어있는 데이터를 가져올 때는 index번호를 사용함 
console.log(color[1]);
// 배열에 들어있는 데이터의 갯수를 확인할 때는 .length를 사용함 
// 마지막에 있는 값을 추출할 때는 length-1의 값을 index 번호로 입력하면 됨. 
console.log(color.length);



let txt = "홍길동";
let add = txt;

console.log(txt, add);

txt = "신해철";
console.log(txt, add);

//---------------------

let a = [1,2,3]; 
let b = a;
console.log(a, b);

// a = [5,6,7,8];
// console.log(a, b);

// a[4] = 9;
// console.log(a);

a[3] = 9; 
console.log(a, b);

let c = ['홍길동', 12, true];
console.log(c[0]);

let d = c; 
console.log(c===d);
c[3] = 100;
console.log(d);
console.log(c === d);

console.log();
