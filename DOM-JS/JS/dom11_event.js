// 버튼 요소 가져오기 
const $btn = document.querySelector('button');
//button이라는 객체의 프로퍼티를 확인할 때는 dir을 사용함 
console.dir($btn);

//작동할 여러 기능들을 함수 안에 저장
//trigger(이벤트 - 사용자의 어쩌구)
$btn.onclick = () => {
  //alert : 경고창
  alert("버튼클릭");
}

//.onclick 함수 없애기 => 의도적으로 빈값을 넣어서 없애버리기 
$btn.onclick = null;

// //사용자가 alert('이벤트 발생)
// //다른 함수를 생성해서 alert 생성 
// $btn.onclick = () => {
//   alert('이벤트 발생');
// }

//이벤트 발생하는 메소드알아보기 

//이벤트가 발생될 함수 만들어보기 
//addEventListener에 들어가는 함수명은 handle을 주로 사용함
//eventListener 함수의 매개변수의 이름은 주로 e, event를 사용함 
const handleClick = (event) => {
  alert('버튼클릭');
  $btn.removeEventListener('click', handleClick);
  
}
//함수 적용해보기
$btn.addEventListener('click', handleClick );


// $btn.addEventListener('click', ()=>{
//   alert('이벤트 발생');
// });



