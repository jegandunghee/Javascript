
/*상품 수량은 1~10까지의 수만 처리됨
  1이 되면 -버튼 비활성화 처리
  10이 되면 +버튼 비활성화 처리 
  - 버튼, +버튼은 1씩 증감하도록 처리 */

/* 상품 최대 갯수 지정  */
const MAX_LEN = 10; 


//요소 선택 

// p태그 요소 가져오기
const pElem = document.querySelector('p');

// 버튼 요소 가져오기 
const minusElem = document.querySelector('.product>button:nth-child(1)');
const plusElem = document.querySelector('.product>button:nth-child(3)');

//수량이 변할 수 있는 숫자 변수 지정하기 
let count = 1; 

/*+버튼 눌렀을 때 p태그에 있는 숫자가 1씩 증가 */
//trigger 처리 (onclick) 후 함수에 동작 저장하기 
plusElem.onclick = () => {
  count++;

  //p태그의 숫자값 바꾸기 
  pElem.textContent = `${count}`;

  //count값이 증가되다가 max_lan이 되면 +버튼이 비활성화되도록 설정 
  if(count >= MAX_LEN){
    plusElem.disabled = true; 
  }
}

/* - 버튼을 눌렀을 때 p태그에 있는 숫자가 1씩 감소  */

minusElem.onclick = ()=> {
  count--;

  pElem.textContent = `${count}`; 
  
  if(count <= 1){
    minusElem.disabled = true;
  }
}