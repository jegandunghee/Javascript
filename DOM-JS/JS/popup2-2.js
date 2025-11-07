/* 이미지를 복제하고 기존에 보여지는 이미지를 다른 이미지로 교체하기 */
const imgElem = document.querySelectorAll('main>img');
const boxElem = document.querySelector('.lightbox');
const contentElem = boxElem.children[0];
const closeElem = contentElem.querySelector('.close');


imgElem.forEach( (item) => {
  item.addEventListener( 'click', () => {
    //click한 이미지를 clone에 복제(cloneNode( Boolean ) ) 
    //clone이라는 item이 복제될 영역 만들기 
    const clone = item.cloneNode(true);

    //content에 기존 이미지가 있으면 교체를 하고, 없으면 추가하기
    //기존 이미지(oldimg) 찾기 
    const oldImg = contentElem.querySelector('img');

    //oldImg 있으면 교체(replaceWith), 없으면 추가(append)
    if(oldImg){
      oldImg.replaceWith(clone);
    }else{
      contentElem.append(clone);
    }

    //alt(이미지 설명)은 p태그로 만들기 
    //p태그 요소 만들기 
    const pElem = document.createElement('p');
    pElem.textContent = item.alt;

    //p태그도 img와 마찬가지로 있으면 교체, 없으면 추가 
    const oldP = contentElem.querySelector('p');
    if(oldP){
      pElem.replaceWith(pElem);
    }else {
      contentElem.append(pElem);
    }
    

    //팝업창 보이도록 설정
    boxElem.style.display = 'block';
  });
});

closeElem.addEventListener('click', () => {
  boxElem.style.display = 'none';
});

//bg영역 클릭할때만 close 되도록 설정하기
// 콜백함수의 매개변수로 event객체 설정 
// event가 일어난 대상은 target ,
//  addEvent가 적용된 대상은  currentTarget 으로 지정할 수 있음 
boxElem.addEventListener('click', (e) => {
  if(e.target === boxElem){
    boxElem.style.display = 'none';
  }
})
