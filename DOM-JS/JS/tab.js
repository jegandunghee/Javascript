//메뉴-n 클릭 시 .active 지정하되 다른 li에 active가 지정되어있을 시 remove로 삭제하기 
// 이벤트로 클릭 처리하기 toggle 처리로 class 부여하기 

//tab_menu의 요소 가져오기
const tabMenu = document.querySelectorAll('.tab_menu > li');
const tabItem = document.querySelectorAll('.tab_item > li');


tabMenu.forEach( (menu, idx) => {
  // menu에는 li라는 요소가 들어가져있음 
  console.log(menu); // -> 각 li가 menu에 들어가져있음 

  menu.addEventListener('click', () => {
    
    const prev = document.querySelector('.active');
    prev.classList.remove('active');
    //각 li 요소에 active 클래스 추가함
    menu.classList.add('active');

    //tab_item이 메뉴 idx값에 맞게 show클래스를 추가함 
    const item = document.querySelector('.show');
    item.classList.remove('show');
    tabItem[idx].classList.add('show');
  });
});


