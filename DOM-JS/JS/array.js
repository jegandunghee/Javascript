/* 배열 객체 알아보기  */
let colors = ['red', 'green', 'blue'];
console.log(colors[0]);

const data = colors.pop();
console.log(data);
console.log(colors);

colors.push('black');
console.log(colors);

/*-------------배열-----------*/ 
const arr = [1, 2, 3]; 

//new : 생성자에 의해서 생성 
const arr2 = new Array(3);
console.log(arr2);

//문자열도 배열 
const arr3 = Array.from('abc');
console.log(arr3);

//제일 앞에 추가/제거 : unshift() / shift()
//중간에 추가 / 제거 / 변경 : splice()

colors = ['red', 'green', 'blue'];

//배열 앞에 black 추가 
colors.unshift('black');
console.log(colors);

//꺼내는 메서드 사용시에는 변수로 저장이 가능함 
let result = colors.shift()
console.log(result);
console.log(colors);

/*------- splice 사용해보기 ------- */
//삭제 
result = colors.splice(colors.length-1, 1)
console.log(result);
console.log(colors);

//추가 
colors.splice(1, 0 ,'black');
console.log(colors);

//변경 
colors.splice(1, 1, 'purple'); 
console.log(colors);

/*배열에서 위치값 찾을 때 */ 
result = colors.indexOf('green');
console.log(result);


/* 값이 있는지 없는지 확인할 때  */
result = colors.includes('orange');
console.log(result);