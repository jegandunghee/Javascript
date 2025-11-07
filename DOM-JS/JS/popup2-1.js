const imgElem = document.querySelectorAll("img");
const boxElem = document.querySelector(".lightbox");
const closeElem = boxElem.querySelector('.close');


//원본객체.forEach(원본객체의 요소를 담을 매개변수지정)
imgElem.forEach((item) => {
  item.addEventListener("click", () => {
    //팝업이미지 생성 전에, 이미지가 있다면 img요소 삭제하기 
    //이미지 요소가 있다면 img 변수에 저장하기 
    const img = boxElem.children[0].querySelector('img');
    
    //img에 요소가 들어오면 remove 처리하기 
    if(img){
      img.remove();
    }

    //내가 클릭한 이미지의 요소와 같게 .content의 img태그 구성하기
    //img 요소 만들고 src,alt 지정하기
    const elem = document.createElement("img");
    elem.src = item.src;
    elem.alt = item.alt;

    //content 요소 불러와서 elem append하기
    boxElem.children[0].append(elem);

    boxElem.style.display = "block";
  });
});

closeElem.addEventListener('click', () => {
  boxElem.style.display = 'none';
})
