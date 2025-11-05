// 함수 정의 => 호출 

// const 함수명 (매개변수1, 매개변수2) = > { }

// 함수명(인자, 인자);

// 인자(함수) => 콜백함수

// 인자 갯수와 상관없이 다 전달 받을 경우에 ...을 사용함 , 전달받은 값은 배열로 저장됨(나머지 매개변수)
// 나머지 매개변수를 사용하는 경우 -> 

// const addnum = (a, b) =>{
//   return a + b; 
// }

const addnum = (...numbers) => {
  console.log(numbers);
  let total = 0;
  for(let n of numbers){
    total += n;
  }
  return total;
}

console.log("addnum의 합은 : " +addnum(5, 6, 7, 8));

const a = [1,2];
const b = [3,4, 5, 6, 19];
const c = [...a, ...b];

console.log("a + b : " + c);


const d  = [9,8,7,6];
const e = [...d]; 
const f = d;

d[0] = 10;

console.log("배열 d의 요소들은 : " + d);
console.log("배열 e의 요소들은 : " + e);
console.log("배열 f의 요소들은 : " + f);


/* [10, 20, 30, 40]; 배열 분리하기 */

const [first, ...rest] = [10, 20, 30, 40];
console.log("first의 값:");
console.log(first);
console.log("rest의 값:");
console.log(rest);


// 배열의 각 요소 추출하기 (구조분해방식)
const arr = [10, 20, 30];
const [g, h, i] = arr;

console.log(g, h, i);

// --- 원하는 요소만 추출하기 ---- 
const colors = ['red', 'green', 'blue'];
const [j,,k] = colors;


console.log("j, k의 값은 : ");
console.log(j,k);


//함수를 이용한 구조분해 
const printFirst = ([first]) => {
  console.log(first);
}

printFirst([100,200,300]);
