
/*상품 수량은 1~10까지의 수만 처리됨
  1이 되면 -버튼 비활성화 처리
  10이 되면 +버튼 비활성화 처리 
  - 버튼, +버튼은 1씩 증감하도록 처리 */


/* 상품 최대 갯수 지정  */
const MAX_LEN = 10; 

const decreaseBtn = document.querySelector('.decrease');
decreaseBtn.disabled = true;

const plusBtn = document.querySelector('.plus');
console.log(plusBtn[0]);

const quantity = document.querySelector('p');

//수량 변수 
let n = 1;

// 초기 수량
quantity.textContent = `${n}`;

//plus button 설정하기 
const plusClick = ()=> {
  decreaseBtn.disabled = false;
  n++;
  if(n >= MAX_LEN){
    n=MAX_LEN;
    plusBtn.disabled = true;
  }
  quantity.textContent = `${n}`;
}

plusBtn.onclick = plusClick;

//decrease button 설정하기 
const decreaseClick = ()=>{
  plusBtn.disabled = false;
  n--;
  if(n<=1){
    n=1;
    decreaseBtn.disabled = true;
  }

  quantity.textContent = `${n}`;
}

decreaseBtn.onclick = decreaseClick;


//aside에 있는 이미지 클릭 시 1번 이미지 위치와 교체되도록 설정 

const imgElem = document.querySelectorAll('aside > img');
const mainImg = document.querySelector('main>img');

const changeImg = () => {
  for(let i = 0; i<imgElem.length; i++){
    imgElem[i].onclick = () =>{
      // mainImg.src = `../IMG/img-0${i+2}.png`;

      /* attribute(속성값 변경) 속성 사용해보기  */
      mainImg.setAttribute('src',`../IMG/img-0${i+2}.png` );

    }
  }
}

changeImg();

/* 상세설명보기 버튼 클릭 시 텍스트가 보였다 안보였다 처리하기  */
const detailBtn = document.querySelector('#detail>button');
const detailTxt = document.querySelector('#detail > div.text');


detailBtn.onclick = () => {
  // detailTxt.style.display = "block";

  detailTxt.classList.toggle('hide');


  //버튼에 글씨가 상세설명보기면 상세설명닫기로 변경
  // 상세설명닫기면 보기로 변경 
  
  const btnTxt = detailBtn.textContent;

  if(btnTxt === "상세설명보기"){
    detailBtn.textContent = '상세설명닫기';
  }else{
    detailBtn.textContent = '상세설명보기';
  }


}

