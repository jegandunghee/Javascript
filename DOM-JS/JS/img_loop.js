
//버튼 요소 가져오기 
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slidElem = document.querySelector('.slider');
const stopBtn = document.querySelector('.stop');
const playBtn = document.querySelector('.play');

//변수 선언
let count = 1;
//slidElem의 최대 width사이즈 구하는 변수 
const MAX_SIZE = slidElem.children.length + 2;
const MAX_WIDTH = MAX_SIZE * 300;
let timer = null;

//버튼 비활성화 함수 만들기 
const disableBtn = () => {
  prevBtn.style.pointerEvents = 'none';
  nextBtn.style.pointerEvents = 'none';
}

//버튼 활성화 함수 만들기 
const enableBtn = () => {
  prevBtn.style.pointerEvents = 'auto';
  nextBtn.style.pointerEvents = 'auto';
}

//prev 버튼 처리될 때 실행될 함수 만들기 
const handlePrevClick = () => {
  //return 의 역할 : count가 0이 되었을 때 아래 작성된 동작 멈추기 
  if(count <= 0){
    //break, continue로도 사용가능하지만 함수작성시에는 return을 주로 사용함
    return;
  }

  //prev버튼 클릭 시 비활성화 
  //와다다 누를 때 transition 없어지는거 막아주기
  disableBtn(

  );

  count--; 

  // slider의 위치값 변경 : left :  100%
  slidElem.style.transition = '0.5s';
  slidElem.style.left= `-${count*100}%`;
}

/*멈춤버튼 누르면 자동실행 멈추고 플레이버튼 누르면 자동실행되는 함수 지정하기 */
//자동실행 멈추기
stopBtn.addEventListener('click',() =>{
  clearInterval(timer);
});

//자동실행하기
playBtn.addEventListener('click', () => {
  //handleNextClick을 2초에 한번씩 무한실행하기
  timer = setInterval( handleNextClick, 2000);
}) ;

//next 버튼 처리될 때 실행될 함수 만들기 
const handleNextClick = () => {
  //5번 이미지에서 멈추기
  if(count >= MAX_SIZE ){
    return;
  }

  count++;
  // slider의 위치값 변경 : left :  -100%
  slidElem.style.transition = '0.5s';
  slidElem.style.left= `-${count*100}%`;
}

//prev 버튼 클릭
prevBtn.addEventListener('click', handlePrevClick);

// next 버튼 클릭 
nextBtn.addEventListener('click', handleNextClick);

//css에서 트랜지션이 끝났을 때 발생되는 이벤트 
// transitionend
slidElem.addEventListener('transitionend', () => {
  //마지막(count = MAX_SIZE -1)이미지일 때 첫번째 이미지로 순간이동하기
  if( count === MAX_SIZE -1){
    slidElem.style.transition = 'none';
    count = 1;
    slidElem.style.left = `-${count*100}%`;
  }

  //첫번째(count = 0)이미지일 때 5번 이미지로 순간이동하기
  if(count === 0){
    slidElem.style.transition = 'none';
    count = MAX_SIZE -2;
    slidElem.style.left = `-${count*100}%`;
  }

  //transition처리가 끝났을 때 버튼 활성화 하기 
  enableBtn();
})

//시작되자마자 실행되는 함수 지정 
const init = () => {
  //slider width값 변경하기 
  slidElem.style.width = `${MAX_WIDTH}px`;

  //맨 뒤에 1번을 복제해서 추가하기 
  const firstClone = slidElem.children[0].cloneNode(true);
  console.log(firstClone);
  //마지막에 복제한 1번 li 추가하기 
  slidElem.append(firstClone);

    //맨 앞에 5번 복제해서 추가하기 
  const lastClone = slidElem.children[4].cloneNode(true);
  slidElem.prepend(lastClone);

  //첫 실행 시 1번 이미지 보여지도록 지정 
  slidElem.style.left= `-${count*100}%`;

  //무한반복 실행 
  // setInterval(handleNextClick, 2000);
}

init();