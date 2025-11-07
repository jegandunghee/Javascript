// 로그인 버튼 클릭 시 팝업 창 보이기

const loginBtn = document.querySelector('button');
const boxElem = document.querySelector('.popup_box');
const delBtn = boxElem.querySelector('button');


loginBtn.addEventListener('click', () => {
  boxElem.style.display = 'block';
})

delBtn.addEventListener('click', () => {
  boxElem.style.display = 'none';
})
