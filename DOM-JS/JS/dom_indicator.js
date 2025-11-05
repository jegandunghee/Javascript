/* 인디케이터 클릭 시 이미지 전환하기  */

const listelem = document.querySelectorAll("ul > li");
console.log(listelem);

// num : 매개변수 - 함수에 전달되는 이름이 있는 변수 
const showImg = (num) => {
  const imgElem = document.querySelector("img");
  imgElem.src= `../IMG/img-0${num}.png`;

  //모든 li에서 bgcolor 복구하기 
  for(let i = 0; i < listelem.length ; i++){
    listelem[i].style.backgroundColor = '#ddd';
  }

  //입력된  num-1 index 값을 가지는 indicator의 bgcolor 바꾸기 
  listelem[num-1].style.backgroundColor = '#444';
};

//브라우저 실행 시 첫번째 인디케이터가 선택되어있도록 지정 
const init = () => {
  listelem[0].style.backgroundColor = '#444';
}

init(); //브라우저에서 가장 먼저 실행되는 함수 