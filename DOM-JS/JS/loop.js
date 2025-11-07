/* timeout, interval */


// timeout
const timer = setTimeout( () => {
  console.log("3초 후 한번만 실행");
}, 3000);

clearTimeout(timer);

//interval

let count = 0; 

const loop = setInterval( ()=> {
  count++;
  if(count >= 5){
    clearInterval(loop);
  }
  console.log(`${count}번째 반복중`);
}, 1000);


