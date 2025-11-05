// // 1번재 li태그의 버튼의 객체를 알아오기
// const btnElem = document.querySelector('ul>li:nth-child(1) button');
// console.dir(btnElem);

// //버튼 클릭 시 data-set 정보 읽어오고 span태그의 숫자를 증가시키기
// btnElem.onclick = () => {
//   let count = Number(btnElem.dataset.counter)+1;
//   btnElem.dataset.counter = count;

//   //span 정보 읽어오기
//   // const spanElem = btnElem.children[0] = `${count}`;
//   // console.log(spanElem);

//   const spanElem = btnElem.childNodes[1];
//   spanElem.textContent = count;
// }

/* 3개의 리스트를 다 읽어온 후 
    각각의 리스트에서 버튼 클릭 시 좋아요 숫자 각각 변경*/

const liBtn = document.querySelectorAll("ul > li button");

for (let i = 0; i < liBtn.length; i++) {
  liBtn[i].onclick = () => {
    let count = Number(liBtn[i].dataset.counter);
    count++;
    liBtn[i].dataset.counter = count;
    liBtn[i].children[0].textContent = count;
  };
}

// 설정보기 버튼 클릭 시 class on / off 처리하기

//설정보기 버튼 요소 가져오기
const detailBtn = document.querySelector(".detail>button");
const detailTxt = document.querySelector(".detail>.txt");

detailBtn.onclick = () => {
  let statuss = detailBtn.dataset.status;

  console.log(statuss);

  if (statuss === "on") {
    detailBtn.dataset.status = "off";
    detailTxt.classList.add("hide");
    detailBtn.textContent = '설정보기';
  } else {
    detailBtn.dataset.status = "on";
    detailTxt.classList.remove("hide");
    detailBtn.textContent = "설정닫기"
  }
};
