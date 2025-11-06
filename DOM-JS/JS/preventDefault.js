// preventDefault 알아보기 

//a요소 가져오기 
const $link = document.querySelector('#link');

//eventListener 의 preventDefault알아보기 
$link.addEventListener('click', (event) => {
  event.preventDefault();
  alert('팝업창을 업신여김');
});

//form에서 일어나는 submit 이벤트를 중단해보기 

//form 요소 가져오기 
const $form = document.querySelector('form');

$form.addEventListener('submit', (event) => {
  event.preventDefault(); // 기능 초기화 
  
  //input 요소 가져오기 
  const $input = $form.querySelector('input');
  alert($input.value);

  
})


//ul 객체 가져오기 
const $ul = document.querySelector('ul');

$ul.addEventListener('click', (event)=>{
  // console.log(event.currentTarget); //addEventListener가 등록된 대상이 출력됨
  console.dir(event.target); // this | 실제로 event가 동작하는 대상 
  //tagname = LI와 같으면 alert 창을 띄우기 
  if(event.target.tagName === 'LI'){
    alert(event.target.textContent);
  }

  //가장가까운 li찾을 때, 클릭한 객체를 찾을 때. dom/ array
  // 치트시트(cheat sheet)
  const elem = event.target.closest('li');

  if(elem){
    alert(event.target.textContent); 
  }
  
});

