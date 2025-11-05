const addbtn = document.querySelector('.add');
const delbtn = document.querySelector('.del');
const mainElem = document.querySelector('main');


addbtn.onclick = () =>{
  // 버튼요소 생성하기 
  const btn = document.createElement('button');
  btn.textContent = "클릭";

  //html의 main태그 안에 js로 생성한 버튼 추가하기
  mainElem.append(btn);

  //ul > li "리스트$1" * 3 요소 생성하기 

  //ul 먼저 생성하기
  const ulElem = document.createElement("ul");

  for(let i = 0 ; i < 3; i++){
    const liElem = document.createElement("li");
    liElem.textContent = `리스트${i+1}`;
    ulElem.append(liElem);
  }

  mainElem.append(ulElem);


  //p요소 생성하기 - prepend(선택요소의 first child가 됨 , 맨앞에 추가)
  const pElem = document.createElement("p");

  pElem.textContent = "p태그 생성 추가"; 

  mainElem.append(pElem);

  //선택요소 안에 first child가 됨
  // mainElem.prepend(pElem);

  //선택요소의 윗줄에 만들어짐 
  // mainElem.before(pElem);

  //선택요소의 아랫줄에 만들어짐
  // mainElem.after(pElem);
}


// 삭제버튼 클릭 시 처리 
delbtn.onclick = () => {
  //p태그 삭제하기 
  const pElem = document.querySelector('p');
  pElem.remove();
}