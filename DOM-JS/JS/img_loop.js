
//버튼 요소 가져오기 
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slidElem = document.querySelector('.slider');
let count = 0;

//next 버튼 처리될 때 실행될 함수 만들기 
const handleNextClick = () => {
  //5번 이미지에서 멈추기
  if(count >= 5){
    return;
  }

  count++;
  // slider의 위치값 변경 : left :  -100%
  slidElem.style.transition = '0.5s';
  slidElem.style.left= `-${count*100}%`;
}

// next 버튼 클릭 
nextBtn.addEventListener('click', handleNextClick);

//css에서 트랜지션이 끝났을 때 발생되는 이벤트 
// transitionend
slidElem.addEventListener('transitionend', () => {
  //마지막(count = 5)이미지일 때 첫번째 이미지로 순간이동하기
  if( count ===5){
    slidElem.style.transition = 'none';
    count = 0;
    slidElem.style.left = `-${count*100}%`;
  }
})

//시작되자마자 실행되는 함수 지정 
const init = () => {
  //slider width값 변경하기 
  slidElem.style.width = '1800px';


  //맨 뒤에 1번을 복제해서 추가하기 
  const firstClone = slidElem.children[0].cloneNode(true);
  console.log(firstClone);
  //마지막에 복제한 1번 li 추가하기 
  slidElem.append(firstClone);

  //무한반복 실행 
  setInterval(handleNextClick, 2000);
}

init();