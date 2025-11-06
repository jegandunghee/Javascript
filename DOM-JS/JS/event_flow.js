// outer, middel, inner 요소 가져오기 
const $outer = document.querySelector('#outer');
const $middle = document.querySelector('#middle');
const $inner = document.querySelector('#inner');

//event의 버블링 , 캡쳐링

// $outer.addEventListener('click', ()  => {
//   alert('outer 클릭');
// });

// $middle.addEventListener('click', ()  => {
//   alert('middle 클릭');
// });

// $inner.addEventListener('click', ()  => {
//   alert('inner 클릭');
// });

//3번째 인자를 capture로 지정 시 순서가 outer > middle > inner  순으로 
// 상위 -> 하위로 이벤트가 위임됨
// $outer.addEventListener('click', () => {
//   alert('outer click')
// }, {capture:true});

// $middle.addEventListener('click', () => {
//   alert('middle click')
// }, {capture:true});

// $inner.addEventListener('click', () => {
//   alert('inner click')
// }, {capture:true});

//3번째 인자를 once로 설정 시 
// 이벤트가 한번만 실행되고 삭제됨. 
$outer.addEventListener('click', () => {
  alert('outer click')
}, {once:true});

$middle.addEventListener('click', () => {
  alert('middle click')
}, {once:true});

$inner.addEventListener('click', () => {
  alert('inner click')
}, {once:true});