/*이미지 캐러셀을 위한 js 작성해보기.. 혼자서..  */

/* -----------------  구현되어야 할 조건들  ------------------
  1. next 버튼 클릭 시 다음 화면으로 넘어가게 만들기 
  2. setInterval로 무한 자동화면넘김처리하기 
  3. prev 버튼 클릭 시 이전 화면으로 넘어가게 만들기 
  4. "멈춤", "실행" 버튼 클릭 시 interval 동작 실행/취소 하기 
  ----------------------------------------------------------*/

// 1.1 요소 가져오기 (버튼 : prev, next, stop, play 이미지 : slider )
const precBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const sildElem = document.querySelector('.slider');
const stopBtn = document.querySelector('.stop');
const playBtn = document.querySelector('.play');

//1.2 slidElem 배열의 index값을 알려줄 변수 지정하기 
let count = 1;
//slidElem의 최대 width 사이즈 구하는 변수지정 
// MAX_SIZE : slidElem 의 양 끝에 복제된 이미지까지의 총 길이 
const MAX_SIZE = slidElem.children.length + 2; 
// MAX_WIDTH : img넓이 값 곱하기 
const MAX_WIDTH = MAX_SIZE * 300; 
//Interval 설정할 변수 선언하기 
let timer = null; 

//prev, next 버튼 비활성화 함수 만들기
const disableBtn = () => {
  precBtn.style.pointerEvents = 'none';
  nextBtn.style.pointerEvents = 'none';
}

//prev, next 버튼 활성화 함수 만들기 
const enableBtn = () => {
  precBtn.style.pointerEvents = 'auto';
  nextBtn.style.pointerEvents = 'auto';
}


//prev 버튼 처리될 때 실행될 함수 만들기 
const handlePrevClick = () => {
  // index값이 0이 될 때 아래 작성된 동작들 멈추기 
  if(count <= 0){
    return;
  }

  //prev 버튼 비활성화 -> transition 시간보다 빠르게 클릭될 때 에러 해결 
  disableBtn(); 

  count--; 

  //slider의 위치값 변경 : left 100% 씩 이동 
  slidElem.style.transition = '0.5s'
  slidElem.style.left = `-${count*100}%`
}

//stop 버튼 클릭 시 handleclick 실행 중지 
stopBtn.addEventListener('click', () => {
  clearInterval(timer);
});

//play버튼 클릭 시 handleclick 자동실행 
playBtn.addEventListener('click', () => {
  timer = setInterval(handleNextClick, 2000);
});



//1.3 next 버튼 처리될 때 실행될 함수 지정하기 
const handleNextClick = () => {
  //slider의 index값이 5번일 때 동작 멈추도록 지정하기 
  if(count >= MAX_SIZE){
    //return : 반환, 동작 중지 역할을 함 
    return; 
  }

  //next 버튼 클릭 시 index값이 달라지므로 count의 값도 증가하도록 지정 
  count++; 

  //slider 이동 시 transition 처리하기 
  slidElem.style.transition = '0.5s';
  //slider의 위치값 변경하기 : left의 값을 -100% 씩 이동하기 
  slidElem.style.left = `-${count*100}%`;

}

//prev 버튼 클릭 시 handlePrevClick 실행 
prevBtn.addEventListener('click', handlePrevClick)

// next 버튼 클릭 시 handleNextClick 실행 
nextBtn.addEventListener('click', handleNextClick); 

/*이미지 순간이동 처리하기 */
slidElem.addEventListener('transitionend', () => {
  //마지막 이미지일 때 다음버튼 누르면 1번 이미지로 이동하기 
  if(count === MAX_SIZE -1){
    slidElem.style.transition = 'none'; 
    count = 1; 
    slidElem.style.left = `${count*100}%`;
  }

  //첫번째 이미지일 때 이전버튼 누르면 5번 이미지로 이동하기 
  if(count === 0){
    slidElem.style.transition = 'none'; 
    count = MAX_SIZE -2; 
    slidElem.style.left = `${count*100}%`;
  }

  //transition처리가 끝났을 때 버튼 활성화 하기 
  enableBtn();
})

/*시작되자마자 실행되는 함수 지정 */ 
const init = () => {
  //slider width값 변경하기 
  slidElem.style.width = `-${MAX_WIDTH}px`

  //1번 이미지 복제해서 맨뒤에 추가하기 
  const firstClone = slidElem.children[0].cloneNode(true);
  slidElem.append(firstClone); 

  //5번 이미지 복제해서 맨앞에 추가하기 
  const lastClone = slidElem.children[4].cloneNode(true); 
  slidElem.append(lastClone); 

  //첫 실행 시 1번 이미지 보이도록 고정하기 
  slidElem.style.left = `${count*100}%`
}

init();
