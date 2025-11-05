/* 조건 연산자(삼항연산자) */

//  항 ? 항1 : 항2
//  (조건식) ? true일 경우 항1 실행 : false일 경우 항2 실행 

let age=25; 
let result = (age >= 19) ? "성인" : "미성년자"; 

/* 짝수와 홀수를 판별해서 짝수는 "짝수" 출력, 홀수는 "홀수" 출력하기  */

let num = 172; 

let message = ( num % 2 === 0) ? "짝수" : "홀수"; 

console.log(message);

/* 점수가 60점 이상이면 합격 출력, 60 미만이면 불합격 출력 */

let score = 78; 
console.log((score >= 60) ? "합격" : "불합격");

/* 숫자 저장 후 0 보다 크면 양수, 아니면 0 또는 음수를 출력 */

let number = -1; 
let what = (number > 0) ? "양수" : "0 또는 음수";

console.log(what);

/* 이름이라는 변수에 저장된 값이 빈 문자열이면 "이름 없음", 값이 있으면 "이름있음" 출력  */

let my_name = "";
let result_name = (my_name) ? "이름있음" : "이름없음"; 
console.log(result_name);

// nullish 연산자 
// 값이 null이거나 혹은 undifined일 때 기본값을 설정해주는 연산자 

let wallet = null; 
let result_wallet = wallet?? "텅장"; 
console.log(`재히 통장은 ${result_wallet} 입니다.`);

//optional chaining 연산자 
// ?. -> 존재하지 않는 데이터가 있을 경우 오류없이 처리를 도와주는 연산자.

let data1 = null;
console.log(data1?.data);