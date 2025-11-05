//버튼 클릭 시 이미지 변경하기 

const bntelem = document.querySelector("button");
const imgelem = document.querySelector("img")
let count = 1; 


//함수 만들기
const handleclick = () => {
  count++;
  if(count >= 6){
    count = 1;
  }
  imgelem.src = `../IMG/img-0${count}.png`;
};

//onclick에 handleclick이라는 주소를 지정함.
//handleclick()으로 작성할 경우 클릭처리를 하지 않아도 함수가 실행된 상태가 저장되기 때문에
//바뀐 이미지가 바로 보여지게 됨.
bntelem.onclick = handleclick;
