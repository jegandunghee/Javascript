//요소 가져오기 
const boxElem = document.querySelector('.box');

//hover 처리 js로 해보기 
//js에서는 원상복귀가 안되므로 올렸을 때 내렸을 때 처리 각각해주기

/*
//마우스 올렸을 때 
boxElem.addEventListener('mouseenter', () => {
  boxElem.style.backgroundColor = 'skyblue';
});

//마우스 내렸을 때
boxElem.addEventListener('mouseleave', () => {
  boxElem.style.backgroundColor = 'transparent';
});

//마우스 움직일 때 
document.addEventListener('mousemove', (e) => {
  console.log(e);
}); */

// 마우스로 박스 드래그처리하기 
let isDrag = false;

//마우스가 눌려졌을 때 : mousedown 
boxElem.addEventListener('mousedown', (e) => {
  console.log(e);
  //마우스 오른쪽 버튼이 눌렸을 때 드래그 처리 안되도록 설정하기
  if(e.button ===2) return;

  //드래그 시작
  isDrag = true;
  boxElem.classList.add('move');
});

//마우스가 움직일 때 
document.addEventListener('mousemove', (e) => {
  // console.log(e);
  //드래그 상태가 아닐 시에는 동작 멈추기
  if(!isDrag) return; 

  // console.log(e.clientX, e.clientY);

  //마우스의 위치값대로 박스 움직이기
  // 값에 단위 지정해줘야 제대로 작동함..!! 
  boxElem.style.left = `${e.clientX}px`;
  boxElem.style.top = `${e.clientY}px`;
  boxElem.style.transform = 'translate(-50%, -50%) scale(0.7)';
});

//마우스가 안눌러진 상태일 때 
document.addEventListener('mouseup', () => {
  isDrag = false;
  boxElem.classList.remove('move');
  boxElem.style.transform = 'scale(1)';
});

// 마우스 우클릭 
document.addEventListener('contextmenu', (e) => {
  //기본메뉴 팝업 막기 
  //event 객체에 내제되어있는 preventDefault 값 지정해주면 우클릭->메뉴설정이 없어짐 
  e.preventDefault()

});