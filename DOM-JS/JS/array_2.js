/* 배열 객체의 4총사  */
// 고차 메서드 (High-order method)
// forEach , map, filter, reduce 

//배열 선언하기 
const colors = ['red', 'purple', 'blue', 'green', 'black'];

/* 배열의 각 값을 가져오기 forEach */ 

//forEach 배우기 전,, 
/*for(let i = 0; i < colors.length; i++){
  console.log(colors[i]);
}*/

//배열 객체에 만들어진 메서드 사용해보기 => forEach 
//forEach 배운 후. (배열을 업신여김)
//매개변수의 변수명은 자유롭게 지정하되, 의미가 있는것으로 작성하기 
colors.forEach((_,idx)=> {
  console.log(idx);
});

/* 새로운 배열 만들어보기 : map  */
const new_arr = colors.map( (value) => {
  return value+ '-1';
} )

//매개변수가 하나일 때 () 생략 가능
// 실행할 코드가 한 줄일 때 -> {} & return 생략 가능,
const new_arr2 = colors.map(value => value = '-2');

console.log(new_arr);
console.log(colors);



/* filter : 조건에 맞는 요소만 새 배열로 반환  */

//글자수가 5개 이상인 값들로만 새 배열로 만들어보기
const longColors = colors.filter((color)=>{
  return color.length>=5 ; 
});

console.log(longColors);


/* reduce : 누적계산값을 생성 | 합계, 문자열 결합 */
const numbers = [4, 6, 2, 7];

const total = numbers.reduce( (sum, i) => {
  return sum+i;
});
console.log(total);