/* 증감연산자(단항 연산자) : ++ --  */
/* 변수++ , 변수--, ++변수, --변수 -> 1씩 증가하거나 감소  */

let a = 5; 
let b = a++; 


// console.log(a); 
// console.log(b); 

// b=a--;
// console.log(a);
// console.log(b);

// //a=5, b=6
// a=++b;
// console.log('a=', a, 'b=', b);

// // a=7, b=6
// b=a--;
// console.log('a=', a, 'b=', b);


/*----------------------------------------------------- */

let c = 8; 
let d = 2; 

c++;
console.log('c = ', c);
// c= 9 

--c; 
console.log('c = ', c);
//c = 8

console.log('c = ',c++);
//c = 8

console.log('c = ',c);
//c = 9


c++;
c++; 
d=c;

console.log('d = ',d); 
//d = 11

console.log('d = ', --d); 
//d=10

let i = 5; 
console.log('i = ', i++ + ++i); // 5 + 7 = 12 
console.log(i); // 최종 i의 값은 7이 됨. 

let score = 0; 
score++; 
score++; 
score += 5; 
console.log('score=', score);

let time = 10; 
time--; 
time--; 
time -= 3; 
console.log('time=', time);


let jeje = 10; 

console.log(++jeje);

console.log(jeje);

console.log(jeje++);


console.log(jeje);


