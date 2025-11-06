//method 
/* const user = {
  id : 101,
  user_name : 'jung',
  idAdmin : false, 
  sayHi : (text) => {
    console.log(`${text}님, 안녕하세요!`);
  }
}

console.log(user.user_name);
console.log(user.sayHi('jaehee'));

// -----------객체에 key 가 없을 때 키와 값을 추가해보기 -----------
const person = {};
const key = "phone";
person['first'] = 'jungjaehee'
person[key] = '010-1111-1111';

console.log(person.first);
console.log(person.phone);
*/

//--------객체 복사, ...(spread) ,구조분해 사용해보기 ----------- 

const a = {
  gubun : 'A',
  info : {
    city : '서울', 
    desc : '수도'
  }
}

//깊은복사 : 복제된 객체가 원본의 영향을 받음 
const b = a;

console.log('a는 : ', a);
console.log('b는 : ', b);
console.log('');


console.log('a의 gubun을 b 로 바꿨을 때 ');

a.gubun = 'b';
console.log('ver2 a는 : ', a);
console.log('ver2 b는 : ', b);
console.log('');

//얕은복사 : 복제된 객체가 원본의 영향을 받지 않음 
const c = {...a};

console.log('얕은복사 - ...spread 살펴보기');

console.log('a는: ', a);
console.log('c는: ', c);
console.log('');


console.log('a의 gubun 값을 ci로 바꿨을 때 ');
a.gubun = 'Ci';
console.log('ver3 a는 : ', a);
console.log('ver3 b는 : ', b);
console.log('ver3 c는 : ', c);
console.log('');

//gubun의 값과 info의 city:'서울'만 복제해서 새로운 객체 만들기 
//구조분해 사용해서 새로운 객체 만들어보기 
// 복제할 때는 복제본의 구조를 원본과 같게 만들어서 가져와야함 
const {gubun, info:{city}} = a; 
console.log(gubun);
console.log(city);

const user = {
  id : 101,
  user_name : 'jung',
  idAdmin : false, 
  sayHi : (text) => {
    console.log(`${text}님, 안녕하세요!`);
  }
}

// user_name은 변수로 복사, 나머지는 객체로 복사해보기 
const {user_name, ...rest} = user;
console.log(user_name);
console.log(rest);