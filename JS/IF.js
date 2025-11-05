/* 조건문 - if문 */

// 나이가 19세 이상일 경우 성인 출력, 아닐경우 미성년차 출력 
let age = 78;
let result = "";
result = (age > 19) ? "성인" : "미성년자";
console.log(result);

if(age > 19){
  result = "성인입니다.";
} else {
  result = "미성년자입니다"
}




result = Boolean(10>5);
//result -> true 

result = Boolean(3=='3'); 
//result -> true 

result = Boolean("hello");
//result -> true

result = Boolean("");
//result -> flase

console.log("결과는" , result);

//변수에 숫자를 저장 후 양수인지, 음수인지, 0인지 구분하기 
let num = -3;

if(num > 0){
  console.log("num = 양수");
} else if (num<0){
  console.log("num = 음수");
} else{
  console.log("num = 0");
}

// 5의 배수의 수는 "5의 배수입니다" 출력 아니면 아닙니다. 출력 

num = 12; 
if(num % 5 === 0){
  console.log("5의 배수입니다.");
}else{
  console.log("5의 배수가 아닙니다.");
}

num = 10; 
if(num % 5){
  console.log("아닙니다.");
}else{
  console.log("5의 배수입니다.");
}

/* 사용자가 로그인을 했을 때  참이면 환영합니다. 거짓이면 로그인을 하세요 를 출력*/
let login = 1; 

if(login){
  console.log("환영합니다.");
}else{
  console.log("로그인을 하세요");
}


//현재 시간에 따라 0~12시 사이는 좋은 아침, 13~18시 사이는 좋은 오후, 18~23사이는 좋은 저녁 출력 
let watch = "안녕";


if (watch < 12){
  console.log("굿모닝");
}else if ( watch < 18){
  console.log("굿에프터눈");
}else if( watch < 23){
  console.log("굿나잇");
}else{
  console.log("시간을 입력하셨나요?");
}















