//데이터 먼저 만들어보기 json 형식
const faq = [
  // 프로퍼티 : {key      :        값 }
  {question : '이 강의는 어떤 내용을 다루나요?' ,
    answer : '웹 퍼블리싱 및 프론트엔드 개발에 필요한 실무 기술을 다룹니다.'
  },
  {question : '어제 저녁은 무엇을 드셨나요?' ,
    answer : '돼지갈비, 꿔바로우, 백김치당면볶음을 먹었습니다.'
  },
  {question : '오늘 점심 메뉴는 무엇인가요?' ,
    answer : '아직 미정이며, 쌀국수나 순대국밥을 예상하고있습니다.'
  },
  {question : '확실히 가을은 가을이다,,' ,
    answer : '카오룽 카오룽..?? '
  },
  {question : '덮을 이불이 없어요ㅠ' ,
    answer : '더부리부리...?'
  }
];

/*json으로 만들어진 데이터를 활용해서 qna 만들어보기 */

//함수로 p태그 만들어서 추가하기 
const createElem_pTag = ( txt, clsName )=>{
  //p태그 생성
  const elem = document.createElement('p');
  //textcontent = 매개변수 
  elem.textContent = txt;
  elem.className = clsName;
  return elem;

}

//faq를 이용한 ul > li 구성하기
const ulElem = document.createElement('ul');

faq.forEach( (list) => {
    const liElem = document.createElement('li');
/*    const qElem = document.createElement('p');
    const aElem = document.createElement('p');

    //질문 p태그로 지정 후 li의 key중 question 내용을 삽입함, 
    //class를 question으로 지정함 
    qElem.textContent = list.question;
    qElem.className = "question"; 

    aElem.textContent = list.answer;
    aElem.className = 'answer';

    //상위 태그에 append로 자식태그 지정하기 
    liElem.append(qElem);
    liElem.append(aElem);*/ 

    //question 클릭 시 answer p태그에 class show toggle 처리하기 
    const qElem = createElem_pTag(list.question, 'question');
    const aElem = createElem_pTag(list.answer, 'answer');

    //이벤트처리하기 
    qElem.addEventListener('click', () => {
      aElem.classList.toggle('show')
    })

    liElem.append(qElem);
    liElem.append(aElem);
    ulElem.append(liElem);
});

document.body.append(ulElem);

