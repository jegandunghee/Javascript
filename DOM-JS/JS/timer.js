//현재 시 : 분 : 초 읽어오기 -> 함수로 처리해보기 

const divElem = document.querySelector('div');


const updateTime = () => {
  //date 객체를 만들기 
  const current = new Date();
  const hh = String(current.getHours()).padStart(2, "0");
  const mm = String(current.getMinutes()).padStart(2, "0");
  const ss = String(current.getSeconds()).padStart(2, "0");

  divElem.textContent = `${hh} : ${mm} : ${ss}`;
}
setInterval(updateTime, 1000);


