//각 상품의 장바구니 추가 버튼을 누르면 장바구니에
// 각 상품의 정보가 생성, 버튼의 텍스트는 "삭제" 로 변경
// 총 가격에는 장바구니에 담긴 상품들의 가격을 합친 금액 표시

//요소 가져오기

//장바구니 추가 버튼 요소 가져오기
const addbtn = document.querySelectorAll("button");

//상품 정보 텍스트 요소 가져오기
const prodElem = document.querySelectorAll(".product p");
console.dir(prodElem);

//장바구니가 생성될 영역 = main 요소 가져오기
const shopcart = document.querySelector("main");

//총가격 요소 가져오기 
const total = document.querySelector('.total');
//총가격이 저장될 변수 지정하기 
let totalPrice = 0;

//ul 생성하기
const ulElem = document.createElement("ul");
shopcart.append(ulElem);

//장바구니 추가 버튼 클릭 시 지정하기 
for(let i = 0; i < addbtn.length; i++){
  addbtn[i].onclick = () => {

    //li 요소 만들기 
    const liElem = document.createElement('li');

    //p 상품정보 요소 생성
    //proElem의 요소 textContent에 저장하기 
    //li 자식으로 p태그 들어가도록 설정하기 
    const pElem = document.createElement('p');
    pElem.textContent = prodElem[i].textContent;
    liElem.append(pElem);

    //삭제 버튼 만들기 
    //li 자식태그로 지정하기 
    const delBtn = document.createElement('button');
    delBtn.textContent = '삭제'; 
    liElem.append(delBtn);
    console.log(delBtn);

    //li는 ul의 자식태그로 지정하기 
    ulElem.append(liElem); 

    //총가격 더하기 지정 
    //prodElem의 dataset - price  읽어오기 
    //숫자로 저장될 수 있도록 number로 감싸기 
    const price = Number(prodElem[i].dataset.price);

    //합계 변수에 총가격 더하기 
    totalPrice += price

    //span 태그 안에있는 가격 text에 totalprice 넣기 
    total.textContent = totalPrice;

    //삭제버튼 클릭 시 remove 처리하기 
    delBtn.onclick = () => {

      //삭제버튼 클릭 시 총가격 빼기 
      totalPrice -= price;
      total.textContent = totalPrice;
      liElem.remove();
    }
  }
}
