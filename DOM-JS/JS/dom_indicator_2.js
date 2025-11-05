/*반복을 이용해서 클릭 처리하기  */
/* class로 list의 bg-color 변경하기 */

//img 
const imgElem = document.querySelector('img');
//li (indicator)
const liElem = document.querySelectorAll("ul>li");
//h1
const h1Elem = document.querySelector("h1");


const showImg = (num) => {
  imgElem.src = `../IMG/img-0${num}.png`;
  
}

console.log(liElem[0]);

const init = () => {
  //반복문 이용해서 클릭처리하기
  for(let i = 1; i < 6; i++){
    liElem[i-1].onclick = () => {
      imgElem.src = `../IMG/img-0${i}.png`;
      imgElem.alt = `${i}번 이미지`;

      //class show가 지정된 항목 찾기 -> 공백으로 없애기 
      const preElem = document.querySelector('.show');

      //첫번째 show가 없을 경우 
      if(preElem){
        preElem.className='';
      }

      //li한테 class 이름 지정하기 
      liElem[i-1].className = "show line";
      //show가 지정된 li 제외하고 class 지우기 


      //h1 텍스트 이미지에 맞춰 변경하기 
      h1Elem.textContent = `${i}번 이미지`;
    }
  }
}

init(); 
