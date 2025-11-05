/* a태그 속성 href 지정 후 클릭 시 사이트 변경하기  */


// 요소 선택하기 
const aElem = document.querySelector('a');

//네이버 버튼 
const naverBtn = document.querySelector('.btn_wrap > button:nth-child(1)');
naverBtn.onclick = () => {
  aElem.href = 'https://naver.com';
}

//다음 버튼
const daumBtn = document.querySelector('.btn_wrap > button:nth-child(2)');
daumBtn.onclick = () => {
  aElem.href = 'https://daum.net';
}

//구글 버튼
const googleBtn = document.querySelector('.btn_wrap > button:nth-child(3)');
googleBtn.onclick = () => {
  aElem.href = 'https://google.com';
}
