//h2요소 가져오기 
const h1Elem = document.querySelector('h1');
//프로그래스 바 요소 가져오기
const proBarElem = document.querySelector('.proBar');
//top 버튼 요소 가져오기
const topBtn = document.querySelector('.top');
//main 요소 가져오기
const mainElem = document.querySelector('main');

//top 버튼 클릭 시 main으로 이동하기 
topBtn.addEventListener('click', () => {
  //scrollIntoView() 메서드 : 호출 된 요소가 사용자에게 표시되도록 요소의 상위 컨테이너를 스크롤 함 
  mainElem.scrollIntoView({behavior:"smooth"});
})


//스크롤 이벤트 처리하기
//e : 이벤트 객체 받아서 처리하기(매개변수로 받기)
window.addEventListener('scroll', () => {
  //전체 문서의 높이(scrollHeight - 스크롤이 가능한 전체 길이) 구하기 
  //구조분해 사용하기 : document.documentElement의 속성 중 scrollHeight의 값을 변수 scrollHeight에 저장되어짐
  const {scrollHeight, clientHeight, scrollTop} = document.documentElement;
  //스크롤 가능한 범위 : 전체 길이 - 현재 길이
  const scrollable = scrollHeight - clientHeight;
  
  // 스크롤 진행률 퍼센트 구하기 : 현재 스크롤 위치 / 스크롤 가능한 범위 * 100  
  const rate = (scrollTop / scrollable)*100;
  
  //.proBar의 width값에 스크롤 진행률 적용하기 
  proBarElem.style.width = `${rate}%`;

  /*---------------------------------------- */

  
});