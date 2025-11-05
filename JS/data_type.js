// 자료형 살펴보기 - 직접참조형 


let txt = '안녕하세요'; //문자열 
let greeting = txt; // txt 변수를 greeting 변수에 저장하기 

txt = '반갑습니다.'; // txt 변수값 변경 

console.log(txt); // txt는 반갑습니다.

console.log(greeting); 
/* greeting은 안녕하세요 출력됨.
    let greeting 을 안녕하세요txt로 지정해놨기 때문에 안녕하세요로 출력됨 
    이게 바로 직접참조형  */


// boolean 형 알아보기 
let check = 100 > 30; 

console.log(check);


//내장함수 사용하기 
let data = Number("23"); 

console.log(data);
console.log(typeof data);

//boolean type 확인하기 
let data2 = Boolean(1); // true
let data3 = Boolean(0); // false
let data4 = Boolean(-1); // true
let data5 = Boolean('0'); // true
let data6 = Boolean(' '); // true
let data7 = Boolean(''); // false
let data8 = Boolean(null); // false
let data9 = Boolean(undefined); // false | 0을 제외한 모든 숫자는 true로 나옴 | 문자열도 다 true 

console.log(data2);
console.log(data3);