// 객체 전용  for문 
let user={
  user_name  : "정재희", 
  age : 25, 
  job : "student"
}

// key값 출력해보기 
for(let key in user){
  console.log(key);
  // console.log(`${key} : ${user[key]}`);
}

// 문자열은 배열로 처리가 가능함 
let text = "hello";

for(let i=0; i<2; i++){
  console.log(text[i]);
}

for( let i of text){
  console.log(i);
}

