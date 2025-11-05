/* 연산자 */
/* 산술 연산자  */
// + - *  /(나누기 = 몫) %(나머지) **(제곱)

let a = 8;
let b = 5; 

console.log('a + b =',  a + b);
console.log('a - b =',a - b);
console.log('a * b =',a * b);
console.log('a / b =',a / b);
console.log('a % b =',a % b);
console.log('a** =',a ** 2);

// % 사용하는 경우 : even(짝수)혹은 odd(홀수) 구할 때 , 범위의 수 구할때  
console.log('a**b = ', a**b);  // 8 * 8 * 8 * 8 * 8 = 8의 5제곱 

/* 대입연산자 */

// = += -= *= /= %= 

let c = 5; 

c+= 2; // c = c + 2 
c-= 1; // c = c - 1 
c*= 3; // c = c * 3
c/= 2; // c = c / 2
c%= 4; // c = c % 4 => 최종 c 의 값은 1 

// c += 3 값이 출력됨 
console.log(c += 3);

/* 비교 연산자 */
// > < >= <= , 같다 (==, ===), 같지 않다(!=, !==)
let d = 10; 
let e = 5; 

console.log( d > e); //true
console.log( d < e); // false
console.log( d == 10); // true
console.log( d == '10'); // true -> type 상관없이 값만 비교할 때 == 사용
console.log( d === '10'); // false  -> type 과 값 둘 다 비교할 때 ===사용 (권장)
console.log(d != '10'); // type 상관없이 값만 비교 (d 와 '10'은 같다고 정의함)
console.log(d !== '10'); // type과 값 비교 (d 와 '10'은 다르다고 정의함)

/* 논리 연산자 */
// && || ! 
// and(그리고) or(또는) not(반대, 아니다)


let f = 10; 
let g = 0; 
let h = false;

console.log(Boolean(f)); //true 
console.log(Boolean(g)); //false 

// and or not 사용해보기 


console.log('f > 8 && g = ', f > 8 && g); // false 
console.log('f > 8 || h =', f > 8 || h ); // true 
console.log( '!h = ', !h ); // true 

let userName = '';
let nick = userName || 'guest'; 
console.log(nick);
console.log(Boolean(nick));

let ischeck = true;
let idcheck = false; 
ischeck && console.log("체크상태입니다."); // 뒤에 위치한 값 실행
ischeck || console.log("체크상태입니다."); // 뒤에 위치한 값 실행 x  
idcheck && console.log("체크해보겟습니다."); // 뒤에 위치한 값 실행
idcheck || console.log("체크해보겟습니다."); // 뒤에 위치한 값 실행 x

