// next 버튼 클릭 시 순서대로 이미지 변경되고 5번 이미지에서 멈추기 

// dom 요소 객체 선택 후 const 상수 선언 후 저장하기 
//변수명 : elem, e, $btn(jQuery)
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
//브라우저의 첫화면에서 이전버튼을 비활성화하기 
btnPrev.disabled = true;
const imgelem = document.querySelector('img');

// 변수 지정하기
let n = 1; 

// nextclick 함수 선언하기 
/* nextclick() : 
    변수 n은 1씩 증감, 
    n의 값이 5이상이 되면 n은 5로 고정되도록 if문 사용,
    const imgelem(img태그)의 속성을 .src 사용해서 변경해줌 */
const nextClick = ()=>{
  // 다음 버튼 눌렀을 때 이전 버튼 활성화
  btnPrev.disabled = false;
  n++;
  if(n >=5){
    n = 5;
    //n 이 5가 되면 next 버튼을 비활성화 함
    btnNext.disabled = true;
  }

  //이미지 경로에 변수 n을  넣어 함수 실행 시 이미지 변경되도록 지정
  //imgelem : 객체 , src:key , = ` key 의 값`
  imgelem.src = `../IMG/img-0${n}.png`;
}

/*  btnNext(button.next) 를 클릭했을 때
    nextClick 함수 실행 되도록 지정*/
btnNext.onclick = nextClick;

// ----------button.prev 클릭 시 이미지 변경 -----------

const prevClick = () => {
  // 이전 버튼 눌렀을 때 다음버튼 활성화 
  btnNext.disabled = false;
  n--;
  if(n<=1){
    n=1;
    //n이 1보다 작거나 같아지면 prev 버튼 비활성화 
    btnPrev.disabled = true;
  }

  imgelem.src = `../IMG/img-0${n}.png`;
}

btnPrev.onclick = prevClick;