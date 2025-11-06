const menulist = ['HOME', 'ABOUT', 'CONTACT'];
const $ul = document.querySelector('ul');

menulist.map( (value)=> {
  const elem = document.createElement('li');
  elem.textContent = value;
  $ul.append(elem);

})

//외부에서 데이터를 받아오는 json 형식 
//json은 배열로 만들어지며, 배열은 객체로 값이 생성되어져있음
const products = [
  {id:1, title:'mouse', price:25000, img:'../IMG/img-01.png'},
  {id:2, title:'keyboard', price:45000, img:'../IMG/img-02.png'},
  {id:3, title:'monitor', price:120000, img:'../IMG/img-03.png'},
  {id:4, title:'pen', price:120000, img:'../IMG/img-04.png'},
  {id:5, title:'cup', price:120000, img:'../IMG/img-05.png'},
];

const ulElem = document.querySelector('ul');

products.forEach( (value1)=> {
  //li > div 생성
  const liElem = document.createElement('li');
  const divElem = document.createElement('div');
  liElem.style.backgroundImage = `url(${value1.img})`
  ulElem.append(liElem);
})