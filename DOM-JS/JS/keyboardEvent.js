/* 키보드 이벤트 처리 알아보기 */

//.box 요소 가져오기
const boxElem = document.querySelector(".box");
console.log(boxElem);

//버튼을 누르면 수치값 만큼 이동되도록 상수 선언하기
const STEP = 10;
// 박스의 위치값이 저장되는 변수 지정 -> offsetWidth , offsetHeight 요소로 box 위치값 가져오기
//client
let moveX = (document.documentElement.clientWidth * 0.5) - (boxElem.offsetWidth * 0.5);
let moveY = (document.documentElement.clientHeight * 0.5) - (boxElem.offsetHeight * 0.5);

  //초기 box의 위치값 지정하기
boxElem.style.left = `${moveX}px`;
boxElem.style.top = `${moveY}px`;

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      moveY -= STEP;
      break;
    case "ArrowDown":
      moveY += STEP;
      break;
    case "ArrowLeft":
      moveX -= STEP;
      break;
    case "ArrowRight":
      moveX += STEP;
      break;
  }

  //방향키로 조작 시 box의 위치값이 전달되도록 지정
  boxElem.style.left = `${moveX}px`;
  boxElem.style.top = `${moveY}px`;
});
